<h1 id="aws-resource-access-manager">AWS Resource Access Manager v2018-01-04</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This is the <i>Resource Access Manager API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in RAM. RAM is a service that helps you securely share your Amazon Web Services resources to other Amazon Web Services accounts. If you use Organizations to manage your accounts, then you can share your resources with your entire organization or to organizational units (OUs). For supported resource types, you can also share resources with individual Identity and Access Management (IAM) roles and users. </p> <p>To learn more about RAM, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/ram">Resource Access Manager product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/userguide/">Resource Access Manager User Guide</a> </p> </li> </ul>

Base URLs:

* <a href="http://ram.us-east-1.amazonaws.com">http://ram.us-east-1.amazonaws.com</a> - The RAM multi-region endpoint

* <a href="https://ram.us-east-1.amazonaws.com">https://ram.us-east-1.amazonaws.com</a> - The RAM multi-region endpoint

* <a href="http://ram.cn-north-1.amazonaws.com.cn">http://ram.cn-north-1.amazonaws.com.cn</a> - The RAM endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ram.cn-north-1.amazonaws.com.cn">https://ram.cn-north-1.amazonaws.com.cn</a> - The RAM endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ram/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-resource-access-manager-default">Default</h1>

## AcceptResourceShareInvitation

<a id="opIdAcceptResourceShareInvitation"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/acceptresourceshareinvitation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareInvitationArn": "string",
    "clientToken": "string"
  }'
```

`POST /acceptresourceshareinvitation`

Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.

> Body parameter

```json
{
  "resourceShareInvitationArn": "string",
  "clientToken": "string"
}
```

<h3 id="acceptresourceshareinvitation-parameters">Parameters</h3>

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
|» resourceShareInvitationArn|body|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to accept.|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "resourceShareInvitation": {
    "resourceShareInvitationArn": {},
    "resourceShareName": {},
    "resourceShareArn": {},
    "senderAccountId": {},
    "receiverAccountId": {},
    "invitationTimestamp": {},
    "status": {},
    "resourceShareAssociations": {},
    "receiverArn": {}
  },
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="acceptresourceshareinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptResourceShareInvitationResponse](#schemaacceptresourceshareinvitationresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|ResourceShareInvitationArnNotFoundException|[ResourceShareInvitationArnNotFoundException](#schemaresourceshareinvitationarnnotfoundexception)|
|483|483|ResourceShareInvitationAlreadyAcceptedException|[ResourceShareInvitationAlreadyAcceptedException](#schemaresourceshareinvitationalreadyacceptedexception)|
|484|484|ResourceShareInvitationAlreadyRejectedException|[ResourceShareInvitationAlreadyRejectedException](#schemaresourceshareinvitationalreadyrejectedexception)|
|485|485|ResourceShareInvitationExpiredException|[ResourceShareInvitationExpiredException](#schemaresourceshareinvitationexpiredexception)|
|486|486|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|488|488|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|489|489|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateResourceShare

<a id="opIdAssociateResourceShare"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/associateresourceshare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArn": "string",
    "resourceArns": [
      "string"
    ],
    "principals": [
      "string"
    ],
    "clientToken": "string"
  }'
```

`POST /associateresourceshare`

Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 

> Body parameter

```json
{
  "resourceShareArn": "string",
  "resourceArns": [
    "string"
  ],
  "principals": [
    "string"
  ],
  "clientToken": "string"
}
```

<h3 id="associateresourceshare-parameters">Parameters</h3>

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
|» resourceShareArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add principals or resources to.|
|» resourceArns|body|[[String](#schemastring)]|false|Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources that you want to share. This can be <code>null</code> if you want to add only principals.|
|» principals|body|[[String](#schemastring)]|false|<p>Specifies a list of principals to whom you want to the resource share. This can be <code>null</code> if you want to add only resources.</p> <p>What the principals can do with the resources in the share is determined by the RAM permissions that you associate with the resource share. See <a>AssociateResourceSharePermission</a>.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "resourceShareAssociations": {},
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="associateresourceshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateResourceShareResponse](#schemaassociateresourceshareresponse)|
|480|480|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|481|481|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|482|482|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|
|483|483|ResourceShareLimitExceededException|[ResourceShareLimitExceededException](#schemaresourcesharelimitexceededexception)|
|484|484|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|485|485|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|
|486|486|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|487|487|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|488|488|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|489|489|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|490|490|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|491|491|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|492|492|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateResourceSharePermission

<a id="opIdAssociateResourceSharePermission"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/associateresourcesharepermission \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArn": "string",
    "permissionArn": "string",
    "replace": true,
    "clientToken": "string",
    "permissionVersion": 0
  }'
```

`POST /associateresourcesharepermission`

Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.

> Body parameter

```json
{
  "resourceShareArn": "string",
  "permissionArn": "string",
  "replace": true,
  "clientToken": "string",
  "permissionVersion": 0
}
```

<h3 id="associateresourcesharepermission-parameters">Parameters</h3>

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
|» resourceShareArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to which you want to add or replace permissions.|
|» permissionArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission to associate with the resource share. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.|
|» replace|body|boolean|false|<p>Specifies whether the specified permission should replace the existing permission associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to a resource share that currently doesn't have a permission. The default value is <code>false</code>.</p> <note> <p>A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set <code>replace</code> to <code>true</code> then the operation returns an error. This helps prevent accidental overwriting of a permission.</p> </note>|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|
|» permissionVersion|body|integer|false|<p>Specifies the version of the RAM permission to associate with the resource share. You can specify <i>only</i> the version that is currently set as the default version for the permission. If you also set the <code>replace</code> pararameter to <code>true</code>, then this operation updates an outdated version of the permission to the current default version.</p> <note> <p>You don't need to specify this parameter because the default behavior is to use the version that is currently set as the default version for the permission. This parameter is supported for backwards compatibility.</p> </note>|

> Example responses

> 200 Response

```json
{
  "returnValue": {},
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="associateresourcesharepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateResourceSharePermissionResponse](#schemaassociateresourcesharepermissionresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePermission

<a id="opIdCreatePermission"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/createpermission \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "resourceType": "string",
    "policyTemplate": "string",
    "clientToken": "string",
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /createpermission`

Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.

> Body parameter

```json
{
  "name": "string",
  "resourceType": "string",
  "policyTemplate": "string",
  "clientToken": "string",
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="createpermission-parameters">Parameters</h3>

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
|» name|body|string|true|Specifies the name of the customer managed permission. The name must be unique within the Amazon Web Services Region.|
|» resourceType|body|string|true|<p>Specifies the name of the resource type that this customer managed permission applies to.</p> <p>The format is <code> <i>&lt;service-code&gt;</i>:<i>&lt;resource-type&gt;</i> </code> and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string <code>ec2:subnet</code>. To see the list of valid values for this parameter, query the <a>ListResourceTypes</a> operation.</p>|
|» policyTemplate|body|string|true|<p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can't include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|
|» tags|body|[[Tag](#schematag)]|false|Specifies a list of one or more tag key and value pairs to attach to the permission.|

> Example responses

> 200 Response

```json
{
  "permission": {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "status": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "tags": {}
  },
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="createpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePermissionResponse](#schemacreatepermissionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidPolicyException|[InvalidPolicyException](#schemainvalidpolicyexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|PermissionAlreadyExistsException|[PermissionAlreadyExistsException](#schemapermissionalreadyexistsexception)|
|486|486|MalformedPolicyTemplateException|[MalformedPolicyTemplateException](#schemamalformedpolicytemplateexception)|
|487|487|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|488|488|PermissionLimitExceededException|[PermissionLimitExceededException](#schemapermissionlimitexceededexception)|
|489|489|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePermissionVersion

<a id="opIdCreatePermissionVersion"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/createpermissionversion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "permissionArn": "string",
    "policyTemplate": "string",
    "clientToken": "string"
  }'
```

`POST /createpermissionversion`

<p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>

> Body parameter

```json
{
  "permissionArn": "string",
  "policyTemplate": "string",
  "clientToken": "string"
}
```

<h3 id="createpermissionversion-parameters">Parameters</h3>

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
|» permissionArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission you're creating a new version for.|
|» policyTemplate|body|string|true|<p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can't include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "permission": {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "permission": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "status": {},
    "tags": {}
  },
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="createpermissionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePermissionVersionResponse](#schemacreatepermissionversionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidPolicyException|[InvalidPolicyException](#schemainvalidpolicyexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|485|485|MalformedPolicyTemplateException|[MalformedPolicyTemplateException](#schemamalformedpolicytemplateexception)|
|486|486|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|487|487|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|488|488|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|489|489|PermissionVersionsLimitExceededException|[PermissionVersionsLimitExceededException](#schemapermissionversionslimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResourceShare

<a id="opIdCreateResourceShare"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/createresourceshare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "resourceArns": [
      "string"
    ],
    "principals": [
      "string"
    ],
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "allowExternalPrincipals": true,
    "clientToken": "string",
    "permissionArns": [
      "string"
    ]
  }'
```

`POST /createresourceshare`

<p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>

> Body parameter

```json
{
  "name": "string",
  "resourceArns": [
    "string"
  ],
  "principals": [
    "string"
  ],
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "allowExternalPrincipals": true,
  "clientToken": "string",
  "permissionArns": [
    "string"
  ]
}
```

<h3 id="createresourceshare-parameters">Parameters</h3>

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
|» name|body|string|true|Specifies the name of the resource share.|
|» resourceArns|body|[[String](#schemastring)]|false|Specifies a list of one or more ARNs of the resources to associate with the resource share.|
|» principals|body|[[String](#schemastring)]|false|<p>Specifies a list of one or more principals to associate with the resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>|
|» tags|body|[[Tag](#schematag)]|false|Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.|
|» allowExternalPrincipals|body|boolean|false|Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of <code>true</code> lets you share with individual Amazon Web Services accounts that are <i>not</i> in your organization. A value of <code>false</code> only has meaning if your account is a member of an Amazon Web Services Organization. The default value is <code>true</code>.|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|
|» permissionArns|body|[[String](#schemastring)]|false|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.|

> Example responses

> 200 Response

```json
{
  "resourceShare": {
    "resourceShareArn": {},
    "name": {},
    "owningAccountId": {},
    "allowExternalPrincipals": {},
    "status": {},
    "statusMessage": {},
    "tags": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "featureSet": {}
  },
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="createresourceshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResourceShareResponse](#schemacreateresourceshareresponse)|
|480|480|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|481|481|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|
|482|482|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|483|483|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|484|484|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|ResourceShareLimitExceededException|[ResourceShareLimitExceededException](#schemaresourcesharelimitexceededexception)|
|488|488|TagPolicyViolationException|[TagPolicyViolationException](#schematagpolicyviolationexception)|
|489|489|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|490|490|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePermission

<a id="opIdDeletePermission"></a>

> Code samples

```bash
curl 'https://ram.us-east-1.amazonaws.com/deletepermission#permissionArn?permissionArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /deletepermission#permissionArn`

Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.

<h3 id="deletepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionArn|query|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission that you want to delete.|
|clientToken|query|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|
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
  "returnValue": {},
  "clientToken": {},
  "permissionStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="deletepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePermissionResponse](#schemadeletepermissionresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|484|484|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|485|485|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|486|486|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePermissionVersion

<a id="opIdDeletePermissionVersion"></a>

> Code samples

```bash
curl 'https://ram.us-east-1.amazonaws.com/deletepermissionversion#permissionArn&permissionVersion?permissionArn=string&permissionVersion=0' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /deletepermissionversion#permissionArn&permissionVersion`

<p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>

<h3 id="deletepermissionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionArn|query|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission with the version you want to delete.|
|permissionVersion|query|integer|true|<p>Specifies the version number to delete.</p> <p>You can't delete the default version for a customer managed permission.</p> <p>You can't delete a version if it's the only version of the permission. You must either first create another version, or delete the permission completely.</p> <p>You can't delete a version if it is attached to any resource shares. If the version is the default, you must first use <a>SetDefaultPermissionVersion</a> to set a different version as the default for the customer managed permission, and then use <a>AssociateResourceSharePermission</a> to update your resource shares to use the new default version.</p>|
|clientToken|query|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|
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
  "returnValue": {},
  "clientToken": {},
  "permissionStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="deletepermissionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePermissionVersionResponse](#schemadeletepermissionversionresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|486|486|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|487|487|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourceShare

<a id="opIdDeleteResourceShare"></a>

> Code samples

```bash
curl 'https://ram.us-east-1.amazonaws.com/deleteresourceshare#resourceShareArn?resourceShareArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /deleteresourceshare#resourceShareArn`

<p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>

<h3 id="deleteresourceshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceShareArn|query|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to delete.|
|clientToken|query|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|
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
  "returnValue": {},
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="deleteresourceshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourceShareResponse](#schemadeleteresourceshareresponse)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|482|482|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|
|483|483|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|484|484|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|485|485|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|486|486|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|487|487|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|488|488|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateResourceShare

<a id="opIdDisassociateResourceShare"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/disassociateresourceshare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArn": "string",
    "resourceArns": [
      "string"
    ],
    "principals": [
      "string"
    ],
    "clientToken": "string"
  }'
```

`POST /disassociateresourceshare`

Removes the specified principals or resources from participating in the specified resource share.

> Body parameter

```json
{
  "resourceShareArn": "string",
  "resourceArns": [
    "string"
  ],
  "principals": [
    "string"
  ],
  "clientToken": "string"
}
```

<h3 id="disassociateresourceshare-parameters">Parameters</h3>

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
|» resourceShareArn|body|string|true|Specifies <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove resources or principals from.|
|» resourceArns|body|[[String](#schemastring)]|false|Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for one or more resources that you want to remove from the resource share. After the operation runs, these resources are no longer shared with principals associated with the resource share.|
|» principals|body|[[String](#schemastring)]|false|<p>Specifies a list of one or more principals that no longer are to have access to the resources in this resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "resourceShareAssociations": {},
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="disassociateresourceshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateResourceShareResponse](#schemadisassociateresourceshareresponse)|
|480|480|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|481|481|ResourceShareLimitExceededException|[ResourceShareLimitExceededException](#schemaresourcesharelimitexceededexception)|
|482|482|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|483|483|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|
|484|484|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|488|488|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|489|489|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateResourceSharePermission

<a id="opIdDisassociateResourceSharePermission"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/disassociateresourcesharepermission \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArn": "string",
    "permissionArn": "string",
    "clientToken": "string"
  }'
```

`POST /disassociateresourcesharepermission`

Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.

> Body parameter

```json
{
  "resourceShareArn": "string",
  "permissionArn": "string",
  "clientToken": "string"
}
```

<h3 id="disassociateresourcesharepermission-parameters">Parameters</h3>

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
|» resourceShareArn|body|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove the managed permission from.|
|» permissionArn|body|string|true|The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission to disassociate from the resource share. Changes to permissions take effect immediately.|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "returnValue": {},
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="disassociateresourcesharepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateResourceSharePermissionResponse](#schemadisassociateresourcesharepermissionresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableSharingWithAwsOrganization

<a id="opIdEnableSharingWithAwsOrganization"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/enablesharingwithawsorganization \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /enablesharingwithawsorganization`

<p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>

<h3 id="enablesharingwithawsorganization-parameters">Parameters</h3>

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
  "returnValue": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="enablesharingwithawsorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableSharingWithAwsOrganizationResponse](#schemaenablesharingwithawsorganizationresponse)|
|480|480|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPermission

<a id="opIdGetPermission"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/getpermission \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "permissionArn": "string",
    "permissionVersion": 0
  }'
```

`POST /getpermission`

Retrieves the contents of a managed permission in JSON format.

> Body parameter

```json
{
  "permissionArn": "string",
  "permissionVersion": 0
}
```

<h3 id="getpermission-parameters">Parameters</h3>

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
|» permissionArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.|
|» permissionVersion|body|integer|false|<p>Specifies the version number of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version.</p> <p>To see the list of available versions, use <a>ListPermissionVersions</a>.</p>|

> Example responses

> 200 Response

```json
{
  "permission": {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "permission": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "status": {},
    "tags": {}
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

<h3 id="getpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPermissionResponse](#schemagetpermissionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|482|482|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicies

<a id="opIdGetResourcePolicies"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/getresourcepolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArns": [
      "string"
    ],
    "principal": "string",
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /getresourcepolicies`

Retrieves the resource policies for the specified resources that you own and have shared.

> Body parameter

```json
{
  "resourceArns": [
    "string"
  ],
  "principal": "string",
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="getresourcepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceArns|body|[[String](#schemastring)]|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources whose policies you want to retrieve.|
|» principal|body|string|false|Specifies the principal.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|

> Example responses

> 200 Response

```json
{
  "policies": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getresourcepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePoliciesResponse](#schemagetresourcepoliciesresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceArnNotFoundException|[ResourceArnNotFoundException](#schemaresourcearnnotfoundexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceShareAssociations

<a id="opIdGetResourceShareAssociations"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/getresourceshareassociations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "associationType": "PRINCIPAL",
    "resourceShareArns": [
      "string"
    ],
    "resourceArn": "string",
    "principal": "string",
    "associationStatus": "ASSOCIATING",
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /getresourceshareassociations`

Retrieves the lists of resources and principals that associated for resource shares that you own.

> Body parameter

```json
{
  "associationType": "PRINCIPAL",
  "resourceShareArns": [
    "string"
  ],
  "resourceArn": "string",
  "principal": "string",
  "associationStatus": "ASSOCIATING",
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="getresourceshareassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» associationType|body|string|true|<p>Specifies whether you want to retrieve the associations that involve a specified resource or principal.</p> <ul> <li> <p> <code>PRINCIPAL</code> – list the principals whose associations you want to see.</p> </li> <li> <p> <code>RESOURCE</code> – list the resources whose associations you want to see.</p> </li> </ul>|
|» resourceShareArns|body|[[String](#schemastring)]|false|Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share whose associations you want to retrieve.|
|» resourceArn|body|string|false|<p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource whose resource shares you want to retrieve.</p> <p>You cannot specify this parameter if the association type is <code>PRINCIPAL</code>.</p>|
|» principal|body|string|false|<p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an individual IAM user or role.</p> <p>You cannot specify this parameter if the association type is <code>RESOURCE</code>.</p>|
|» associationStatus|body|string|false|Specifies that you want to retrieve only associations that have this status.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» associationType|PRINCIPAL|
|» associationType|RESOURCE|
|» associationStatus|ASSOCIATING|
|» associationStatus|ASSOCIATED|
|» associationStatus|FAILED|
|» associationStatus|DISASSOCIATING|
|» associationStatus|DISASSOCIATED|

> Example responses

> 200 Response

```json
{
  "resourceShareAssociations": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="getresourceshareassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceShareAssociationsResponse](#schemagetresourceshareassociationsresponse)|
|480|480|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|481|481|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceShareInvitations

<a id="opIdGetResourceShareInvitations"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/getresourceshareinvitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareInvitationArns": [
      "string"
    ],
    "resourceShareArns": [
      "string"
    ],
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /getresourceshareinvitations`

Retrieves details about invitations that you have received for resource shares.

> Body parameter

```json
{
  "resourceShareInvitationArns": [
    "string"
  ],
  "resourceShareArns": [
    "string"
  ],
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="getresourceshareinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceShareInvitationArns|body|[[String](#schemastring)]|false|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share invitations you want information about.|
|» resourceShareArns|body|[[String](#schemastring)]|false|Specifies that you want details about invitations only for the resource shares described by this list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> |
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|

> Example responses

> 200 Response

```json
{
  "resourceShareInvitations": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="getresourceshareinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceShareInvitationsResponse](#schemagetresourceshareinvitationsresponse)|
|480|480|ResourceShareInvitationArnNotFoundException|[ResourceShareInvitationArnNotFoundException](#schemaresourceshareinvitationarnnotfoundexception)|
|481|481|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|482|482|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|483|483|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|484|484|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceShares

<a id="opIdGetResourceShares"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/getresourceshares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArns": [
      "string"
    ],
    "resourceShareStatus": "PENDING",
    "resourceOwner": "SELF",
    "name": "string",
    "tagFilters": [
      {
        "tagKey": {},
        "tagValues": {}
      }
    ],
    "nextToken": "string",
    "maxResults": 1,
    "permissionArn": "string",
    "permissionVersion": 0
  }'
```

`POST /getresourceshares`

Retrieves details about the resource shares that you own or that are shared with you.

> Body parameter

```json
{
  "resourceShareArns": [
    "string"
  ],
  "resourceShareStatus": "PENDING",
  "resourceOwner": "SELF",
  "name": "string",
  "tagFilters": [
    {
      "tagKey": {},
      "tagValues": {}
    }
  ],
  "nextToken": "string",
  "maxResults": 1,
  "permissionArn": "string",
  "permissionVersion": 0
}
```

<h3 id="getresourceshares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceShareArns|body|[[String](#schemastring)]|false|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of individual resource shares that you want information about.|
|» resourceShareStatus|body|string|false|Specifies that you want to retrieve details of only those resource shares that have this status.|
|» resourceOwner|body|string|true|<p>Specifies that you want to retrieve details of only those resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resource shares that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resource shares that other accounts share with your account</p> </li> </ul>|
|» name|body|string|false|Specifies the name of an individual resource share that you want to retrieve details about.|
|» tagFilters|body|[[TagFilter](#schematagfilter)]|false|Specifies that you want to retrieve details of only those resource shares that match the specified tag keys and values.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|
|» permissionArn|body|string|false|Specifies that you want to retrieve details of only those resource shares that use the managed permission with this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>.|
|» permissionVersion|body|integer|false|Specifies that you want to retrieve details for only those resource shares that use the specified version of the managed permission.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resourceShareStatus|PENDING|
|» resourceShareStatus|ACTIVE|
|» resourceShareStatus|FAILED|
|» resourceShareStatus|DELETING|
|» resourceShareStatus|DELETED|
|» resourceOwner|SELF|
|» resourceOwner|OTHER-ACCOUNTS|

> Example responses

> 200 Response

```json
{
  "resourceShares": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getresourceshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceSharesResponse](#schemagetresourcesharesresponse)|
|480|480|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|481|481|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPendingInvitationResources

<a id="opIdListPendingInvitationResources"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listpendinginvitationresources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareInvitationArn": "string",
    "nextToken": "string",
    "maxResults": 1,
    "resourceRegionScope": "ALL"
  }'
```

`POST /listpendinginvitationresources`

Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.

> Body parameter

```json
{
  "resourceShareInvitationArn": "string",
  "nextToken": "string",
  "maxResults": 1,
  "resourceRegionScope": "ALL"
}
```

<h3 id="listpendinginvitationresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceShareInvitationArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation. You can use <a>GetResourceShareInvitations</a> to find the ARN of the invitation.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|
|» resourceRegionScope|body|string|false|<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resourceRegionScope|ALL|
|» resourceRegionScope|REGIONAL|
|» resourceRegionScope|GLOBAL|

> Example responses

> 200 Response

```json
{
  "resources": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="listpendinginvitationresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPendingInvitationResourcesResponse](#schemalistpendinginvitationresourcesresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ResourceShareInvitationArnNotFoundException|[ResourceShareInvitationArnNotFoundException](#schemaresourceshareinvitationarnnotfoundexception)|
|486|486|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|487|487|ResourceShareInvitationAlreadyRejectedException|[ResourceShareInvitationAlreadyRejectedException](#schemaresourceshareinvitationalreadyrejectedexception)|
|488|488|ResourceShareInvitationExpiredException|[ResourceShareInvitationExpiredException](#schemaresourceshareinvitationexpiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissionAssociations

<a id="opIdListPermissionAssociations"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listpermissionassociations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "permissionArn": "string",
    "permissionVersion": 0,
    "associationStatus": "ASSOCIATING",
    "resourceType": "string",
    "featureSet": "CREATED_FROM_POLICY",
    "defaultVersion": true,
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /listpermissionassociations`

Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.

> Body parameter

```json
{
  "permissionArn": "string",
  "permissionVersion": 0,
  "associationStatus": "ASSOCIATING",
  "resourceType": "string",
  "featureSet": "CREATED_FROM_POLICY",
  "defaultVersion": true,
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="listpermissionassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» permissionArn|body|string|false|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission.|
|» permissionVersion|body|integer|false|Specifies that you want to list only those associations with resource shares that use this version of the managed permission. If you don't provide a value for this parameter, then the operation returns information about associations with resource shares that use any version of the managed permission.|
|» associationStatus|body|string|false|Specifies that you want to list only those associations with resource shares that match this status.|
|» resourceType|body|string|false|Specifies that you want to list only those associations with resource shares that include at least one resource of this resource type.|
|» featureSet|body|string|false|Specifies that you want to list only those associations with resource shares that have a <code>featureSet</code> with this value.|
|» defaultVersion|body|boolean|false|<p>When <code>true</code>, specifies that you want to list only those associations with resource shares that use the default version of the specified managed permission.</p> <p>When <code>false</code> (the default value), lists associations with resource shares that use any version of the specified managed permission.</p>|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» associationStatus|ASSOCIATING|
|» associationStatus|ASSOCIATED|
|» associationStatus|FAILED|
|» associationStatus|DISASSOCIATING|
|» associationStatus|DISASSOCIATED|
|» featureSet|CREATED_FROM_POLICY|
|» featureSet|PROMOTING_TO_STANDARD|
|» featureSet|STANDARD|

> Example responses

> 200 Response

```json
{
  "permissions": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listpermissionassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionAssociationsResponse](#schemalistpermissionassociationsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissionVersions

<a id="opIdListPermissionVersions"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listpermissionversions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "permissionArn": "string",
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /listpermissionversions`

Lists the available versions of the specified RAM permission.

> Body parameter

```json
{
  "permissionArn": "string",
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="listpermissionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» permissionArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission whose versions you want to list. You can use the <code>permissionVersion</code> parameter on the <a>AssociateResourceSharePermission</a> operation to specify a non-default version to attach.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|

> Example responses

> 200 Response

```json
{
  "permissions": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="listpermissionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionVersionsResponse](#schemalistpermissionversionsresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|486|486|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissions

<a id="opIdListPermissions"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listpermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceType": "string",
    "nextToken": "string",
    "maxResults": 1,
    "permissionType": "ALL"
  }'
```

`POST /listpermissions`

Retrieves a list of available RAM permissions that you can use for the supported resource types. 

> Body parameter

```json
{
  "resourceType": "string",
  "nextToken": "string",
  "maxResults": 1,
  "permissionType": "ALL"
}
```

<h3 id="listpermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceType|body|string|false|<p>Specifies that you want to list only those permissions that apply to the specified resource type. This parameter is not case sensitive.</p> <p>For example, to list only permissions that apply to Amazon EC2 subnets, specify <code>ec2:subnet</code>. You can use the <a>ListResourceTypes</a> operation to get the specific string required.</p>|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|
|» permissionType|body|string|false|<p>Specifies that you want to list only permissions of this type:</p> <ul> <li> <p> <code>AWS</code> – returns only Amazon Web Services managed permissions.</p> </li> <li> <p> <code>LOCAL</code> – returns only customer managed permissions</p> </li> <li> <p> <code>ALL</code> – returns both Amazon Web Services managed permissions and customer managed permissions.</p> </li> </ul> <p>If you don't specify this parameter, the default is <code>All</code>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissionType|ALL|
|» permissionType|AWS_MANAGED|
|» permissionType|CUSTOMER_MANAGED|

> Example responses

> 200 Response

```json
{
  "permissions": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionsResponse](#schemalistpermissionsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPrincipals

<a id="opIdListPrincipals"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listprincipals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceOwner": "SELF",
    "resourceArn": "string",
    "principals": [
      "string"
    ],
    "resourceType": "string",
    "resourceShareArns": [
      "string"
    ],
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /listprincipals`

Lists the principals that you are sharing resources with or that are sharing resources with you.

> Body parameter

```json
{
  "resourceOwner": "SELF",
  "resourceArn": "string",
  "principals": [
    "string"
  ],
  "resourceType": "string",
  "resourceShareArns": [
    "string"
  ],
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="listprincipals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceOwner|body|string|true|<p>Specifies that you want to list information for only resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – principals that your account is sharing resources with</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – principals that are sharing resources with your account</p> </li> </ul>|
|» resourceArn|body|string|false|Specifies that you want to list principal information for the resource share with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>.|
|» principals|body|[[String](#schemastring)]|false|<p>Specifies that you want to list information for only the listed principals.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note>|
|» resourceType|body|string|false|<p>Specifies that you want to list information for only principals associated with resource shares that include the specified resource type.</p> <p>For a list of valid values, query the <a>ListResourceTypes</a> operation.</p>|
|» resourceShareArns|body|[[String](#schemastring)]|false|Specifies that you want to list information for only principals associated with the resource shares specified by a list the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resourceOwner|SELF|
|» resourceOwner|OTHER-ACCOUNTS|

> Example responses

> 200 Response

```json
{
  "principals": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listprincipals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPrincipalsResponse](#schemalistprincipalsresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReplacePermissionAssociationsWork

<a id="opIdListReplacePermissionAssociationsWork"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listreplacepermissionassociationswork \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "workIds": [
      "string"
    ],
    "status": "IN_PROGRESS",
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /listreplacepermissionassociationswork`

Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.

> Body parameter

```json
{
  "workIds": [
    "string"
  ],
  "status": "IN_PROGRESS",
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="listreplacepermissionassociationswork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» workIds|body|[[String](#schemastring)]|false|A list of IDs. These values come from the <code>id</code>field of the <code>replacePermissionAssociationsWork</code>structure returned by the <a>ReplacePermissionAssociations</a> operation. |
|» status|body|string|false|Specifies that you want to see only the details about requests with a status that matches this value.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|IN_PROGRESS|
|» status|COMPLETED|
|» status|FAILED|

> Example responses

> 200 Response

```json
{
  "replacePermissionAssociationsWorks": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listreplacepermissionassociationswork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReplacePermissionAssociationsWorkResponse](#schemalistreplacepermissionassociationsworkresponse)|
|480|480|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceSharePermissions

<a id="opIdListResourceSharePermissions"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listresourcesharepermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArn": "string",
    "nextToken": "string",
    "maxResults": 1
  }'
```

`POST /listresourcesharepermissions`

Lists the RAM permissions that are associated with a resource share.

> Body parameter

```json
{
  "resourceShareArn": "string",
  "nextToken": "string",
  "maxResults": 1
}
```

<h3 id="listresourcesharepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceShareArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share for which you want to retrieve the associated permissions.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|

> Example responses

> 200 Response

```json
{
  "permissions": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="listresourcesharepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceSharePermissionsResponse](#schemalistresourcesharepermissionsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|482|482|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceTypes

<a id="opIdListResourceTypes"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listresourcetypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string",
    "maxResults": 1,
    "resourceRegionScope": "ALL"
  }'
```

`POST /listresourcetypes`

Lists the resource types that can be shared by RAM.

> Body parameter

```json
{
  "nextToken": "string",
  "maxResults": 1,
  "resourceRegionScope": "ALL"
}
```

<h3 id="listresourcetypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|
|» resourceRegionScope|body|string|false|<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resourceRegionScope|ALL|
|» resourceRegionScope|REGIONAL|
|» resourceRegionScope|GLOBAL|

> Example responses

> 200 Response

```json
{
  "resourceTypes": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listresourcetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceTypesResponse](#schemalistresourcetypesresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResources

<a id="opIdListResources"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/listresources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceOwner": "SELF",
    "principal": "string",
    "resourceType": "string",
    "resourceArns": [
      "string"
    ],
    "resourceShareArns": [
      "string"
    ],
    "nextToken": "string",
    "maxResults": 1,
    "resourceRegionScope": "ALL"
  }'
```

`POST /listresources`

Lists the resources that you added to a resource share or the resources that are shared with you.

> Body parameter

```json
{
  "resourceOwner": "SELF",
  "principal": "string",
  "resourceType": "string",
  "resourceArns": [
    "string"
  ],
  "resourceShareArns": [
    "string"
  ],
  "nextToken": "string",
  "maxResults": 1,
  "resourceRegionScope": "ALL"
}
```

<h3 id="listresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourceOwner|body|string|true|<p>Specifies that you want to list only the resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resources that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resources that other accounts share with your account</p> </li> </ul>|
|» principal|body|string|false|Specifies that you want to list only the resource shares that are associated with the specified principal.|
|» resourceType|body|string|false|<p>Specifies that you want to list only the resource shares that include resources of the specified resource type.</p> <p>For valid values, query the <a>ListResourceTypes</a> operation.</p>|
|» resourceArns|body|[[String](#schemastring)]|false|Specifies that you want to list only the resource shares that include resources with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.|
|» resourceShareArns|body|[[String](#schemastring)]|false|Specifies that you want to list only resources in the resource shares identified by the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.|
|» nextToken|body|string|false|Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.|
|» maxResults|body|integer|false|Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.|
|» resourceRegionScope|body|string|false|<p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resourceOwner|SELF|
|» resourceOwner|OTHER-ACCOUNTS|
|» resourceRegionScope|ALL|
|» resourceRegionScope|REGIONAL|
|» resourceRegionScope|GLOBAL|

> Example responses

> 200 Response

```json
{
  "resources": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="listresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourcesResponse](#schemalistresourcesresponse)|
|480|480|InvalidResourceTypeException|[InvalidResourceTypeException](#schemainvalidresourcetypeexception)|
|481|481|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|482|482|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|483|483|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PromotePermissionCreatedFromPolicy

<a id="opIdPromotePermissionCreatedFromPolicy"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/promotepermissioncreatedfrompolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "permissionArn": "string",
    "name": "string",
    "clientToken": "string"
  }'
```

`POST /promotepermissioncreatedfrompolicy`

<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>

> Body parameter

```json
{
  "permissionArn": "string",
  "name": "string",
  "clientToken": "string"
}
```

<h3 id="promotepermissioncreatedfrompolicy-parameters">Parameters</h3>

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
|» permissionArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the <code>CREATED_FROM_POLICY</code> permission that you want to promote. You can get this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> by calling the <a>ListResourceSharePermissions</a> operation.|
|» name|body|string|true|Specifies a name for the promoted customer managed permission.|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "permission": {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "status": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "tags": {}
  },
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="promotepermissioncreatedfrompolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PromotePermissionCreatedFromPolicyResponse](#schemapromotepermissioncreatedfrompolicyresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PromoteResourceShareCreatedFromPolicy

<a id="opIdPromoteResourceShareCreatedFromPolicy"></a>

> Code samples

```bash
curl 'https://ram.us-east-1.amazonaws.com/promoteresourcesharecreatedfrompolicy#resourceShareArn?resourceShareArn=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /promoteresourcesharecreatedfrompolicy#resourceShareArn`

<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>

<h3 id="promoteresourcesharecreatedfrompolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceShareArn|query|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to promote.|
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
  "returnValue": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="promoteresourcesharecreatedfrompolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PromoteResourceShareCreatedFromPolicyResponse](#schemapromoteresourcesharecreatedfrompolicyresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|ResourceShareLimitExceededException|[ResourceShareLimitExceededException](#schemaresourcesharelimitexceededexception)|
|482|482|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|488|488|InvalidStateTransitionException|[InvalidStateTransitionException](#schemainvalidstatetransitionexception)|
|489|489|UnmatchedPolicyPermissionException|[UnmatchedPolicyPermissionException](#schemaunmatchedpolicypermissionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectResourceShareInvitation

<a id="opIdRejectResourceShareInvitation"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/rejectresourceshareinvitation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareInvitationArn": "string",
    "clientToken": "string"
  }'
```

`POST /rejectresourceshareinvitation`

Rejects an invitation to a resource share from another Amazon Web Services account.

> Body parameter

```json
{
  "resourceShareInvitationArn": "string",
  "clientToken": "string"
}
```

<h3 id="rejectresourceshareinvitation-parameters">Parameters</h3>

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
|» resourceShareInvitationArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to reject.|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "resourceShareInvitation": {
    "resourceShareInvitationArn": {},
    "resourceShareName": {},
    "resourceShareArn": {},
    "senderAccountId": {},
    "receiverAccountId": {},
    "invitationTimestamp": {},
    "status": {},
    "resourceShareAssociations": {},
    "receiverArn": {}
  },
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="rejectresourceshareinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectResourceShareInvitationResponse](#schemarejectresourceshareinvitationresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|482|482|ResourceShareInvitationArnNotFoundException|[ResourceShareInvitationArnNotFoundException](#schemaresourceshareinvitationarnnotfoundexception)|
|483|483|ResourceShareInvitationAlreadyAcceptedException|[ResourceShareInvitationAlreadyAcceptedException](#schemaresourceshareinvitationalreadyacceptedexception)|
|484|484|ResourceShareInvitationAlreadyRejectedException|[ResourceShareInvitationAlreadyRejectedException](#schemaresourceshareinvitationalreadyrejectedexception)|
|485|485|ResourceShareInvitationExpiredException|[ResourceShareInvitationExpiredException](#schemaresourceshareinvitationexpiredexception)|
|486|486|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|488|488|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|489|489|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReplacePermissionAssociations

<a id="opIdReplacePermissionAssociations"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/replacepermissionassociations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fromPermissionArn": "string",
    "fromPermissionVersion": 0,
    "toPermissionArn": "string",
    "clientToken": "string"
  }'
```

`POST /replacepermissionassociations`

<p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>

> Body parameter

```json
{
  "fromPermissionArn": "string",
  "fromPermissionVersion": 0,
  "toPermissionArn": "string",
  "clientToken": "string"
}
```

<h3 id="replacepermissionassociations-parameters">Parameters</h3>

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
|» fromPermissionArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to replace.|
|» fromPermissionVersion|body|integer|false|Specifies that you want to updated the permissions for only those resource shares that use the specified version of the managed permission.|
|» toPermissionArn|body|string|true|<p>Specifies the ARN of the managed permission that you want to associate with resource shares in place of the one specified by <code>fromPerssionArn</code> and <code>fromPermissionVersion</code>.</p> <p>The operation always associates the version that is currently the default for the specified managed permission.</p>|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "replacePermissionAssociationsWork": {
    "id": {},
    "fromPermissionArn": {},
    "fromPermissionVersion": {},
    "toPermissionArn": {},
    "toPermissionVersion": {},
    "status": {},
    "statusMessage": {},
    "creationTime": {},
    "lastUpdatedTime": {}
  },
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="replacepermissionassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplacePermissionAssociationsResponse](#schemareplacepermissionassociationsresponse)|
|480|480|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|485|485|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|486|486|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|487|487|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetDefaultPermissionVersion

<a id="opIdSetDefaultPermissionVersion"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/setdefaultpermissionversion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "permissionArn": "string",
    "permissionVersion": 0,
    "clientToken": "string"
  }'
```

`POST /setdefaultpermissionversion`

Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.

> Body parameter

```json
{
  "permissionArn": "string",
  "permissionVersion": 0,
  "clientToken": "string"
}
```

<h3 id="setdefaultpermissionversion-parameters">Parameters</h3>

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
|» permissionArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission whose default version you want to change.|
|» permissionVersion|body|integer|true|Specifies the version number that you want to designate as the default for customer managed permission. To see a list of all available version numbers, use <a>ListPermissionVersions</a>.|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "returnValue": {},
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="setdefaultpermissionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetDefaultPermissionVersionResponse](#schemasetdefaultpermissionversionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|485|485|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|486|486|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/tagresource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArn": "string",
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "resourceArn": "string"
  }'
```

`POST /tagresource`

<p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>

> Body parameter

```json
{
  "resourceShareArn": "string",
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "resourceArn": "string"
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|» resourceShareArn|body|string|false|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add tags to. You must specify <i>either</i> <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both.|
|» tags|body|[[Tag](#schematag)]|true|A list of one or more tag key and value pairs. The tag key must be present and not be an empty string. The tag value must be present but can be an empty string.|
|» resourceArn|body|string|false|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to add tags to. You must specify <i>either</i> <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both.|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|482|482|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|483|483|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|484|484|ResourceArnNotFoundException|[ResourceArnNotFoundException](#schemaresourcearnnotfoundexception)|
|485|485|TagPolicyViolationException|[TagPolicyViolationException](#schematagpolicyviolationexception)|
|486|486|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/untagresource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArn": "string",
    "tagKeys": [
      "string"
    ],
    "resourceArn": "string"
  }'
```

`POST /untagresource`

Removes the specified tag key and value pairs from the specified resource share or managed permission.

> Body parameter

```json
{
  "resourceShareArn": "string",
  "tagKeys": [
    "string"
  ],
  "resourceArn": "string"
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|» resourceShareArn|body|string|false|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove tags from. The tags are removed from the resource share, not the resources in the resource share. You must specify either <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both.|
|» tagKeys|body|[[TagKey](#schematagkey)]|true|Specifies a list of one or more tag keys that you want to remove.|
|» resourceArn|body|string|false|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to remove tags from. You must specify either <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both.|

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
|480|480|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourceShare

<a id="opIdUpdateResourceShare"></a>

> Code samples

```bash
curl https://ram.us-east-1.amazonaws.com/updateresourceshare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceShareArn": "string",
    "name": "string",
    "allowExternalPrincipals": true,
    "clientToken": "string"
  }'
```

`POST /updateresourceshare`

Modifies some of the properties of the specified resource share.

> Body parameter

```json
{
  "resourceShareArn": "string",
  "name": "string",
  "allowExternalPrincipals": true,
  "clientToken": "string"
}
```

<h3 id="updateresourceshare-parameters">Parameters</h3>

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
|» resourceShareArn|body|string|true|Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to modify.|
|» name|body|string|false|If specified, the new name that you want to attach to the resource share.|
|» allowExternalPrincipals|body|boolean|false|Specifies whether principals outside your organization in Organizations can be associated with a resource share.|
|» clientToken|body|string|false|<p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>|

> Example responses

> 200 Response

```json
{
  "resourceShare": {
    "resourceShareArn": {},
    "name": {},
    "owningAccountId": {},
    "allowExternalPrincipals": {},
    "status": {},
    "statusMessage": {},
    "tags": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "featureSet": {}
  },
  "clientToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="updateresourceshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceShareResponse](#schemaupdateresourceshareresponse)|
|480|480|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|UnknownResourceException|[UnknownResourceException](#schemaunknownresourceexception)|
|483|483|MalformedArnException|[MalformedArnException](#schemamalformedarnexception)|
|484|484|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|485|485|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|486|486|OperationNotPermittedException|[OperationNotPermittedException](#schemaoperationnotpermittedexception)|
|487|487|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|488|488|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptResourceShareInvitationResponse">AcceptResourceShareInvitationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptresourceshareinvitationresponse"></a>
<a id="schema_AcceptResourceShareInvitationResponse"></a>
<a id="tocSacceptresourceshareinvitationresponse"></a>
<a id="tocsacceptresourceshareinvitationresponse"></a>

```json
{
  "resourceShareInvitation": {
    "resourceShareInvitationArn": {},
    "resourceShareName": {},
    "resourceShareArn": {},
    "senderAccountId": {},
    "receiverAccountId": {},
    "invitationTimestamp": {},
    "status": {},
    "resourceShareAssociations": {},
    "receiverArn": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareInvitation|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_MalformedArnException">MalformedArnException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedarnexception"></a>
<a id="schema_MalformedArnException"></a>
<a id="tocSmalformedarnexception"></a>
<a id="tocsmalformedarnexception"></a>

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

<h2 id="tocS_ResourceShareInvitationArnNotFoundException">ResourceShareInvitationArnNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareinvitationarnnotfoundexception"></a>
<a id="schema_ResourceShareInvitationArnNotFoundException"></a>
<a id="tocSresourceshareinvitationarnnotfoundexception"></a>
<a id="tocsresourceshareinvitationarnnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ResourceShareInvitationAlreadyAcceptedException">ResourceShareInvitationAlreadyAcceptedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareinvitationalreadyacceptedexception"></a>
<a id="schema_ResourceShareInvitationAlreadyAcceptedException"></a>
<a id="tocSresourceshareinvitationalreadyacceptedexception"></a>
<a id="tocsresourceshareinvitationalreadyacceptedexception"></a>

```json
null
```

<h2 id="tocS_ResourceShareInvitationAlreadyRejectedException">ResourceShareInvitationAlreadyRejectedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareinvitationalreadyrejectedexception"></a>
<a id="schema_ResourceShareInvitationAlreadyRejectedException"></a>
<a id="tocSresourceshareinvitationalreadyrejectedexception"></a>
<a id="tocsresourceshareinvitationalreadyrejectedexception"></a>

```json
null
```

<h2 id="tocS_ResourceShareInvitationExpiredException">ResourceShareInvitationExpiredException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareinvitationexpiredexception"></a>
<a id="schema_ResourceShareInvitationExpiredException"></a>
<a id="tocSresourceshareinvitationexpiredexception"></a>
<a id="tocsresourceshareinvitationexpiredexception"></a>

```json
null
```

<h2 id="tocS_ServerInternalException">ServerInternalException</h2>
<!-- backwards compatibility -->
<a id="schemaserverinternalexception"></a>
<a id="schema_ServerInternalException"></a>
<a id="tocSserverinternalexception"></a>
<a id="tocsserverinternalexception"></a>

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

<h2 id="tocS_InvalidClientTokenException">InvalidClientTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidclienttokenexception"></a>
<a id="schema_InvalidClientTokenException"></a>
<a id="tocSinvalidclienttokenexception"></a>
<a id="tocsinvalidclienttokenexception"></a>

```json
null
```

<h2 id="tocS_IdempotentParameterMismatchException">IdempotentParameterMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatchexception"></a>
<a id="schema_IdempotentParameterMismatchException"></a>
<a id="tocSidempotentparametermismatchexception"></a>
<a id="tocsidempotentparametermismatchexception"></a>

```json
null
```

<h2 id="tocS_AssociateResourceShareResponse">AssociateResourceShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresourceshareresponse"></a>
<a id="schema_AssociateResourceShareResponse"></a>
<a id="tocSassociateresourceshareresponse"></a>
<a id="tocsassociateresourceshareresponse"></a>

```json
{
  "resourceShareAssociations": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareAssociations|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_UnknownResourceException">UnknownResourceException</h2>
<!-- backwards compatibility -->
<a id="schemaunknownresourceexception"></a>
<a id="schema_UnknownResourceException"></a>
<a id="tocSunknownresourceexception"></a>
<a id="tocsunknownresourceexception"></a>

```json
null
```

<h2 id="tocS_InvalidStateTransitionException">InvalidStateTransitionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstatetransitionexception"></a>
<a id="schema_InvalidStateTransitionException"></a>
<a id="tocSinvalidstatetransitionexception"></a>
<a id="tocsinvalidstatetransitionexception"></a>

```json
null
```

<h2 id="tocS_ResourceShareLimitExceededException">ResourceShareLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharelimitexceededexception"></a>
<a id="schema_ResourceShareLimitExceededException"></a>
<a id="tocSresourcesharelimitexceededexception"></a>
<a id="tocsresourcesharelimitexceededexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_AssociateResourceSharePermissionResponse">AssociateResourceSharePermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresourcesharepermissionresponse"></a>
<a id="schema_AssociateResourceSharePermissionResponse"></a>
<a id="tocSassociateresourcesharepermissionresponse"></a>
<a id="tocsassociateresourcesharepermissionresponse"></a>

```json
{
  "returnValue": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_CreatePermissionResponse">CreatePermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissionresponse"></a>
<a id="schema_CreatePermissionResponse"></a>
<a id="tocScreatepermissionresponse"></a>
<a id="tocscreatepermissionresponse"></a>

```json
{
  "permission": {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "status": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "tags": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": {},
  "value": {}
}
```

<p>A structure containing a tag. A tag is metadata that you can attach to your resources to help organize and categorize them. You can also use them to help you secure your resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_InvalidPolicyException">InvalidPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpolicyexception"></a>
<a id="schema_InvalidPolicyException"></a>
<a id="tocSinvalidpolicyexception"></a>
<a id="tocsinvalidpolicyexception"></a>

```json
null
```

<h2 id="tocS_PermissionAlreadyExistsException">PermissionAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemapermissionalreadyexistsexception"></a>
<a id="schema_PermissionAlreadyExistsException"></a>
<a id="tocSpermissionalreadyexistsexception"></a>
<a id="tocspermissionalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_MalformedPolicyTemplateException">MalformedPolicyTemplateException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedpolicytemplateexception"></a>
<a id="schema_MalformedPolicyTemplateException"></a>
<a id="tocSmalformedpolicytemplateexception"></a>
<a id="tocsmalformedpolicytemplateexception"></a>

```json
null
```

<h2 id="tocS_PermissionLimitExceededException">PermissionLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemapermissionlimitexceededexception"></a>
<a id="schema_PermissionLimitExceededException"></a>
<a id="tocSpermissionlimitexceededexception"></a>
<a id="tocspermissionlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreatePermissionVersionResponse">CreatePermissionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissionversionresponse"></a>
<a id="schema_CreatePermissionVersionResponse"></a>
<a id="tocScreatepermissionversionresponse"></a>
<a id="tocscreatepermissionversionresponse"></a>

```json
{
  "permission": {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "permission": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "status": {},
    "tags": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|[ResourceSharePermissionDetail](#schemaresourcesharepermissiondetail)|false|none|Information about a RAM managed permission.|
|clientToken|object|false|none|none|

<h2 id="tocS_PermissionVersionsLimitExceededException">PermissionVersionsLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemapermissionversionslimitexceededexception"></a>
<a id="schema_PermissionVersionsLimitExceededException"></a>
<a id="tocSpermissionversionslimitexceededexception"></a>
<a id="tocspermissionversionslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateResourceShareResponse">CreateResourceShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourceshareresponse"></a>
<a id="schema_CreateResourceShareResponse"></a>
<a id="tocScreateresourceshareresponse"></a>
<a id="tocscreateresourceshareresponse"></a>

```json
{
  "resourceShare": {
    "resourceShareArn": {},
    "name": {},
    "owningAccountId": {},
    "allowExternalPrincipals": {},
    "status": {},
    "statusMessage": {},
    "tags": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "featureSet": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShare|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_TagPolicyViolationException">TagPolicyViolationException</h2>
<!-- backwards compatibility -->
<a id="schematagpolicyviolationexception"></a>
<a id="schema_TagPolicyViolationException"></a>
<a id="tocStagpolicyviolationexception"></a>
<a id="tocstagpolicyviolationexception"></a>

```json
null
```

<h2 id="tocS_DeletePermissionResponse">DeletePermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionresponse"></a>
<a id="schema_DeletePermissionResponse"></a>
<a id="tocSdeletepermissionresponse"></a>
<a id="tocsdeletepermissionresponse"></a>

```json
{
  "returnValue": {},
  "clientToken": {},
  "permissionStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|object|false|none|none|
|clientToken|object|false|none|none|
|permissionStatus|object|false|none|none|

<h2 id="tocS_DeletePermissionVersionResponse">DeletePermissionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionversionresponse"></a>
<a id="schema_DeletePermissionVersionResponse"></a>
<a id="tocSdeletepermissionversionresponse"></a>
<a id="tocsdeletepermissionversionresponse"></a>

```json
{
  "returnValue": {},
  "clientToken": {},
  "permissionStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|object|false|none|none|
|clientToken|object|false|none|none|
|permissionStatus|object|false|none|none|

<h2 id="tocS_DeleteResourceShareResponse">DeleteResourceShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourceshareresponse"></a>
<a id="schema_DeleteResourceShareResponse"></a>
<a id="tocSdeleteresourceshareresponse"></a>
<a id="tocsdeleteresourceshareresponse"></a>

```json
{
  "returnValue": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_DisassociateResourceShareResponse">DisassociateResourceShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresourceshareresponse"></a>
<a id="schema_DisassociateResourceShareResponse"></a>
<a id="tocSdisassociateresourceshareresponse"></a>
<a id="tocsdisassociateresourceshareresponse"></a>

```json
{
  "resourceShareAssociations": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareAssociations|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_DisassociateResourceSharePermissionResponse">DisassociateResourceSharePermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresourcesharepermissionresponse"></a>
<a id="schema_DisassociateResourceSharePermissionResponse"></a>
<a id="tocSdisassociateresourcesharepermissionresponse"></a>
<a id="tocsdisassociateresourcesharepermissionresponse"></a>

```json
{
  "returnValue": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_EnableSharingWithAwsOrganizationResponse">EnableSharingWithAwsOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenablesharingwithawsorganizationresponse"></a>
<a id="schema_EnableSharingWithAwsOrganizationResponse"></a>
<a id="tocSenablesharingwithawsorganizationresponse"></a>
<a id="tocsenablesharingwithawsorganizationresponse"></a>

```json
{
  "returnValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|object|false|none|none|

<h2 id="tocS_GetPermissionResponse">GetPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissionresponse"></a>
<a id="schema_GetPermissionResponse"></a>
<a id="tocSgetpermissionresponse"></a>
<a id="tocsgetpermissionresponse"></a>

```json
{
  "permission": {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "permission": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "status": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|object|false|none|none|

<h2 id="tocS_GetResourcePoliciesResponse">GetResourcePoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepoliciesresponse"></a>
<a id="schema_GetResourcePoliciesResponse"></a>
<a id="tocSgetresourcepoliciesresponse"></a>
<a id="tocsgetresourcepoliciesresponse"></a>

```json
{
  "policies": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policies|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ResourceArnNotFoundException">ResourceArnNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnnotfoundexception"></a>
<a id="schema_ResourceArnNotFoundException"></a>
<a id="tocSresourcearnnotfoundexception"></a>
<a id="tocsresourcearnnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetResourceShareAssociationsResponse">GetResourceShareAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceshareassociationsresponse"></a>
<a id="schema_GetResourceShareAssociationsResponse"></a>
<a id="tocSgetresourceshareassociationsresponse"></a>
<a id="tocsgetresourceshareassociationsresponse"></a>

```json
{
  "resourceShareAssociations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareAssociations|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetResourceShareInvitationsResponse">GetResourceShareInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceshareinvitationsresponse"></a>
<a id="schema_GetResourceShareInvitationsResponse"></a>
<a id="tocSgetresourceshareinvitationsresponse"></a>
<a id="tocsgetresourceshareinvitationsresponse"></a>

```json
{
  "resourceShareInvitations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareInvitations|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidMaxResultsException">InvalidMaxResultsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmaxresultsexception"></a>
<a id="schema_InvalidMaxResultsException"></a>
<a id="tocSinvalidmaxresultsexception"></a>
<a id="tocsinvalidmaxresultsexception"></a>

```json
null
```

<h2 id="tocS_GetResourceSharesResponse">GetResourceSharesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesharesresponse"></a>
<a id="schema_GetResourceSharesResponse"></a>
<a id="tocSgetresourcesharesresponse"></a>
<a id="tocsgetresourcesharesresponse"></a>

```json
{
  "resourceShares": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShares|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_TagFilter">TagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_TagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
{
  "tagKey": {},
  "tagValues": {}
}
```

A tag key and optional list of possible values that you can use to filter results for tagged resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagKey|object|false|none|none|
|tagValues|object|false|none|none|

<h2 id="tocS_ListPendingInvitationResourcesResponse">ListPendingInvitationResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpendinginvitationresourcesresponse"></a>
<a id="schema_ListPendingInvitationResourcesResponse"></a>
<a id="tocSlistpendinginvitationresourcesresponse"></a>
<a id="tocslistpendinginvitationresourcesresponse"></a>

```json
{
  "resources": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_MissingRequiredParameterException">MissingRequiredParameterException</h2>
<!-- backwards compatibility -->
<a id="schemamissingrequiredparameterexception"></a>
<a id="schema_MissingRequiredParameterException"></a>
<a id="tocSmissingrequiredparameterexception"></a>
<a id="tocsmissingrequiredparameterexception"></a>

```json
null
```

<h2 id="tocS_ListPermissionAssociationsResponse">ListPermissionAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionassociationsresponse"></a>
<a id="schema_ListPermissionAssociationsResponse"></a>
<a id="tocSlistpermissionassociationsresponse"></a>
<a id="tocslistpermissionassociationsresponse"></a>

```json
{
  "permissions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPermissionVersionsResponse">ListPermissionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionversionsresponse"></a>
<a id="schema_ListPermissionVersionsResponse"></a>
<a id="tocSlistpermissionversionsresponse"></a>
<a id="tocslistpermissionversionsresponse"></a>

```json
{
  "permissions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPermissionsResponse">ListPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsresponse"></a>
<a id="schema_ListPermissionsResponse"></a>
<a id="tocSlistpermissionsresponse"></a>
<a id="tocslistpermissionsresponse"></a>

```json
{
  "permissions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPrincipalsResponse">ListPrincipalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprincipalsresponse"></a>
<a id="schema_ListPrincipalsResponse"></a>
<a id="tocSlistprincipalsresponse"></a>
<a id="tocslistprincipalsresponse"></a>

```json
{
  "principals": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principals|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListReplacePermissionAssociationsWorkResponse">ListReplacePermissionAssociationsWorkResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreplacepermissionassociationsworkresponse"></a>
<a id="schema_ListReplacePermissionAssociationsWorkResponse"></a>
<a id="tocSlistreplacepermissionassociationsworkresponse"></a>
<a id="tocslistreplacepermissionassociationsworkresponse"></a>

```json
{
  "replacePermissionAssociationsWorks": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replacePermissionAssociationsWorks|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResourceSharePermissionsResponse">ListResourceSharePermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesharepermissionsresponse"></a>
<a id="schema_ListResourceSharePermissionsResponse"></a>
<a id="tocSlistresourcesharepermissionsresponse"></a>
<a id="tocslistresourcesharepermissionsresponse"></a>

```json
{
  "permissions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResourceTypesResponse">ListResourceTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcetypesresponse"></a>
<a id="schema_ListResourceTypesResponse"></a>
<a id="tocSlistresourcetypesresponse"></a>
<a id="tocslistresourcetypesresponse"></a>

```json
{
  "resourceTypes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceTypes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResourcesResponse">ListResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesresponse"></a>
<a id="schema_ListResourcesResponse"></a>
<a id="tocSlistresourcesresponse"></a>
<a id="tocslistresourcesresponse"></a>

```json
{
  "resources": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidResourceTypeException">InvalidResourceTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcetypeexception"></a>
<a id="schema_InvalidResourceTypeException"></a>
<a id="tocSinvalidresourcetypeexception"></a>
<a id="tocsinvalidresourcetypeexception"></a>

```json
null
```

<h2 id="tocS_PromotePermissionCreatedFromPolicyResponse">PromotePermissionCreatedFromPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemapromotepermissioncreatedfrompolicyresponse"></a>
<a id="schema_PromotePermissionCreatedFromPolicyResponse"></a>
<a id="tocSpromotepermissioncreatedfrompolicyresponse"></a>
<a id="tocspromotepermissioncreatedfrompolicyresponse"></a>

```json
{
  "permission": {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "status": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "tags": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|[ResourceSharePermissionSummary](#schemaresourcesharepermissionsummary)|false|none|Information about an RAM permission.|
|clientToken|object|false|none|none|

<h2 id="tocS_PromoteResourceShareCreatedFromPolicyResponse">PromoteResourceShareCreatedFromPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemapromoteresourcesharecreatedfrompolicyresponse"></a>
<a id="schema_PromoteResourceShareCreatedFromPolicyResponse"></a>
<a id="tocSpromoteresourcesharecreatedfrompolicyresponse"></a>
<a id="tocspromoteresourcesharecreatedfrompolicyresponse"></a>

```json
{
  "returnValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|object|false|none|none|

<h2 id="tocS_UnmatchedPolicyPermissionException">UnmatchedPolicyPermissionException</h2>
<!-- backwards compatibility -->
<a id="schemaunmatchedpolicypermissionexception"></a>
<a id="schema_UnmatchedPolicyPermissionException"></a>
<a id="tocSunmatchedpolicypermissionexception"></a>
<a id="tocsunmatchedpolicypermissionexception"></a>

```json
null
```

<h2 id="tocS_RejectResourceShareInvitationResponse">RejectResourceShareInvitationResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectresourceshareinvitationresponse"></a>
<a id="schema_RejectResourceShareInvitationResponse"></a>
<a id="tocSrejectresourceshareinvitationresponse"></a>
<a id="tocsrejectresourceshareinvitationresponse"></a>

```json
{
  "resourceShareInvitation": {
    "resourceShareInvitationArn": {},
    "resourceShareName": {},
    "resourceShareArn": {},
    "senderAccountId": {},
    "receiverAccountId": {},
    "invitationTimestamp": {},
    "status": {},
    "resourceShareAssociations": {},
    "receiverArn": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareInvitation|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ReplacePermissionAssociationsResponse">ReplacePermissionAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplacepermissionassociationsresponse"></a>
<a id="schema_ReplacePermissionAssociationsResponse"></a>
<a id="tocSreplacepermissionassociationsresponse"></a>
<a id="tocsreplacepermissionassociationsresponse"></a>

```json
{
  "replacePermissionAssociationsWork": {
    "id": {},
    "fromPermissionArn": {},
    "fromPermissionVersion": {},
    "toPermissionArn": {},
    "toPermissionVersion": {},
    "status": {},
    "statusMessage": {},
    "creationTime": {},
    "lastUpdatedTime": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replacePermissionAssociationsWork|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_SetDefaultPermissionVersionResponse">SetDefaultPermissionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetdefaultpermissionversionresponse"></a>
<a id="schema_SetDefaultPermissionVersionResponse"></a>
<a id="tocSsetdefaultpermissionversionresponse"></a>
<a id="tocssetdefaultpermissionversionresponse"></a>

```json
{
  "returnValue": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
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

<h2 id="tocS_UpdateResourceShareResponse">UpdateResourceShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceshareresponse"></a>
<a id="schema_UpdateResourceShareResponse"></a>
<a id="tocSupdateresourceshareresponse"></a>
<a id="tocsupdateresourceshareresponse"></a>

```json
{
  "resourceShare": {
    "resourceShareArn": {},
    "name": {},
    "owningAccountId": {},
    "allowExternalPrincipals": {},
    "status": {},
    "statusMessage": {},
    "tags": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "featureSet": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShare|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_AcceptResourceShareInvitationRequest">AcceptResourceShareInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptresourceshareinvitationrequest"></a>
<a id="schema_AcceptResourceShareInvitationRequest"></a>
<a id="tocSacceptresourceshareinvitationrequest"></a>
<a id="tocsacceptresourceshareinvitationrequest"></a>

```json
{
  "resourceShareInvitationArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareInvitationArn|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ResourceShareInvitation">ResourceShareInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareinvitation"></a>
<a id="schema_ResourceShareInvitation"></a>
<a id="tocSresourceshareinvitation"></a>
<a id="tocsresourceshareinvitation"></a>

```json
{
  "resourceShareInvitationArn": {},
  "resourceShareName": {},
  "resourceShareArn": {},
  "senderAccountId": {},
  "receiverAccountId": {},
  "invitationTimestamp": {},
  "status": {},
  "resourceShareAssociations": {},
  "receiverArn": {}
}
```

Describes an invitation for an Amazon Web Services account to join a resource share.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareInvitationArn|object|false|none|none|
|resourceShareName|object|false|none|none|
|resourceShareArn|object|false|none|none|
|senderAccountId|object|false|none|none|
|receiverAccountId|object|false|none|none|
|invitationTimestamp|object|false|none|none|
|status|object|false|none|none|
|resourceShareAssociations|object|false|none|none|
|receiverArn|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
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

<h2 id="tocS_AssociateResourceSharePermissionRequest">AssociateResourceSharePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresourcesharepermissionrequest"></a>
<a id="schema_AssociateResourceSharePermissionRequest"></a>
<a id="tocSassociateresourcesharepermissionrequest"></a>
<a id="tocsassociateresourcesharepermissionrequest"></a>

```json
{
  "resourceShareArn": {},
  "permissionArn": {},
  "replace": {},
  "clientToken": {},
  "permissionVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|true|none|none|
|permissionArn|object|true|none|none|
|replace|object|false|none|none|
|clientToken|object|false|none|none|
|permissionVersion|object|false|none|none|

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

<h2 id="tocS_PrincipalArnOrIdList">PrincipalArnOrIdList</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalarnoridlist"></a>
<a id="schema_PrincipalArnOrIdList"></a>
<a id="tocSprincipalarnoridlist"></a>
<a id="tocsprincipalarnoridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AssociateResourceShareRequest">AssociateResourceShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresourcesharerequest"></a>
<a id="schema_AssociateResourceShareRequest"></a>
<a id="tocSassociateresourcesharerequest"></a>
<a id="tocsassociateresourcesharerequest"></a>

```json
{
  "resourceShareArn": {},
  "resourceArns": {},
  "principals": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|true|none|none|
|resourceArns|object|false|none|none|
|principals|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ResourceShareAssociationList">ResourceShareAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareassociationlist"></a>
<a id="schema_ResourceShareAssociationList"></a>
<a id="tocSresourceshareassociationlist"></a>
<a id="tocsresourceshareassociationlist"></a>

```json
[
  {
    "resourceShareArn": {},
    "resourceShareName": {},
    "associatedEntity": {},
    "associationType": {},
    "status": {},
    "statusMessage": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "external": {}
  }
]
```

<h2 id="tocS_PermissionFeatureSet">PermissionFeatureSet</h2>
<!-- backwards compatibility -->
<a id="schemapermissionfeatureset"></a>
<a id="schema_PermissionFeatureSet"></a>
<a id="tocSpermissionfeatureset"></a>
<a id="tocspermissionfeatureset"></a>

```json
"CREATED_FROM_POLICY"
```

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AssociatedPermission">AssociatedPermission</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedpermission"></a>
<a id="schema_AssociatedPermission"></a>
<a id="tocSassociatedpermission"></a>
<a id="tocsassociatedpermission"></a>

```json
{
  "arn": {},
  "permissionVersion": {},
  "defaultVersion": {},
  "resourceType": {},
  "status": {},
  "featureSet": {},
  "lastUpdatedTime": {},
  "resourceShareArn": {}
}
```

An object that describes a managed permission associated with a resource share.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|permissionVersion|object|false|none|none|
|defaultVersion|object|false|none|none|
|resourceType|object|false|none|none|
|status|object|false|none|none|
|featureSet|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|resourceShareArn|object|false|none|none|

<h2 id="tocS_AssociatedPermissionList">AssociatedPermissionList</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedpermissionlist"></a>
<a id="schema_AssociatedPermissionList"></a>
<a id="tocSassociatedpermissionlist"></a>
<a id="tocsassociatedpermissionlist"></a>

```json
[
  {
    "arn": {},
    "permissionVersion": {},
    "defaultVersion": {},
    "resourceType": {},
    "status": {},
    "featureSet": {},
    "lastUpdatedTime": {},
    "resourceShareArn": {}
  }
]
```

<h2 id="tocS_PermissionName">PermissionName</h2>
<!-- backwards compatibility -->
<a id="schemapermissionname"></a>
<a id="schema_PermissionName"></a>
<a id="tocSpermissionname"></a>
<a id="tocspermissionname"></a>

```json
"string"
```

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

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
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_CreatePermissionRequest">CreatePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissionrequest"></a>
<a id="schema_CreatePermissionRequest"></a>
<a id="tocScreatepermissionrequest"></a>
<a id="tocscreatepermissionrequest"></a>

```json
{
  "name": {},
  "resourceType": {},
  "policyTemplate": {},
  "clientToken": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|resourceType|object|true|none|none|
|policyTemplate|object|true|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ResourceSharePermissionSummary">ResourceSharePermissionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharepermissionsummary"></a>
<a id="schema_ResourceSharePermissionSummary"></a>
<a id="tocSresourcesharepermissionsummary"></a>
<a id="tocsresourcesharepermissionsummary"></a>

```json
{
  "arn": {},
  "version": {},
  "defaultVersion": {},
  "name": {},
  "resourceType": {},
  "status": {},
  "creationTime": {},
  "lastUpdatedTime": {},
  "isResourceTypeDefault": {},
  "permissionType": {},
  "featureSet": {},
  "tags": {}
}
```

Information about an RAM permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|version|object|false|none|none|
|defaultVersion|object|false|none|none|
|name|object|false|none|none|
|resourceType|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|isResourceTypeDefault|object|false|none|none|
|permissionType|object|false|none|none|
|featureSet|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreatePermissionVersionRequest">CreatePermissionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissionversionrequest"></a>
<a id="schema_CreatePermissionVersionRequest"></a>
<a id="tocScreatepermissionversionrequest"></a>
<a id="tocscreatepermissionversionrequest"></a>

```json
{
  "permissionArn": {},
  "policyTemplate": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionArn|object|true|none|none|
|policyTemplate|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ResourceSharePermissionDetail">ResourceSharePermissionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharepermissiondetail"></a>
<a id="schema_ResourceSharePermissionDetail"></a>
<a id="tocSresourcesharepermissiondetail"></a>
<a id="tocsresourcesharepermissiondetail"></a>

```json
{
  "arn": {},
  "version": {},
  "defaultVersion": {},
  "name": {},
  "resourceType": {},
  "permission": {},
  "creationTime": {},
  "lastUpdatedTime": {},
  "isResourceTypeDefault": {},
  "permissionType": {},
  "featureSet": {},
  "status": {},
  "tags": {}
}
```

Information about a RAM managed permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|version|object|false|none|none|
|defaultVersion|object|false|none|none|
|name|object|false|none|none|
|resourceType|object|false|none|none|
|permission|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|isResourceTypeDefault|object|false|none|none|
|permissionType|object|false|none|none|
|featureSet|object|false|none|none|
|status|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PermissionArnList">PermissionArnList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionarnlist"></a>
<a id="schema_PermissionArnList"></a>
<a id="tocSpermissionarnlist"></a>
<a id="tocspermissionarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateResourceShareRequest">CreateResourceShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcesharerequest"></a>
<a id="schema_CreateResourceShareRequest"></a>
<a id="tocScreateresourcesharerequest"></a>
<a id="tocscreateresourcesharerequest"></a>

```json
{
  "name": {},
  "resourceArns": {},
  "principals": {},
  "tags": {},
  "allowExternalPrincipals": {},
  "clientToken": {},
  "permissionArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|resourceArns|object|false|none|none|
|principals|object|false|none|none|
|tags|object|false|none|none|
|allowExternalPrincipals|object|false|none|none|
|clientToken|object|false|none|none|
|permissionArns|object|false|none|none|

<h2 id="tocS_ResourceShare">ResourceShare</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshare"></a>
<a id="schema_ResourceShare"></a>
<a id="tocSresourceshare"></a>
<a id="tocsresourceshare"></a>

```json
{
  "resourceShareArn": {},
  "name": {},
  "owningAccountId": {},
  "allowExternalPrincipals": {},
  "status": {},
  "statusMessage": {},
  "tags": {},
  "creationTime": {},
  "lastUpdatedTime": {},
  "featureSet": {}
}
```

Describes a resource share in RAM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|false|none|none|
|name|object|false|none|none|
|owningAccountId|object|false|none|none|
|allowExternalPrincipals|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|
|tags|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|featureSet|object|false|none|none|

<h2 id="tocS_DeletePermissionRequest">DeletePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionrequest"></a>
<a id="schema_DeletePermissionRequest"></a>
<a id="tocSdeletepermissionrequest"></a>
<a id="tocsdeletepermissionrequest"></a>

```json
{}
```

<h2 id="tocS_PermissionStatus">PermissionStatus</h2>
<!-- backwards compatibility -->
<a id="schemapermissionstatus"></a>
<a id="schema_PermissionStatus"></a>
<a id="tocSpermissionstatus"></a>
<a id="tocspermissionstatus"></a>

```json
"ATTACHABLE"
```

<h2 id="tocS_DeletePermissionVersionRequest">DeletePermissionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionversionrequest"></a>
<a id="schema_DeletePermissionVersionRequest"></a>
<a id="tocSdeletepermissionversionrequest"></a>
<a id="tocsdeletepermissionversionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteResourceShareRequest">DeleteResourceShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcesharerequest"></a>
<a id="schema_DeleteResourceShareRequest"></a>
<a id="tocSdeleteresourcesharerequest"></a>
<a id="tocsdeleteresourcesharerequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateResourceSharePermissionRequest">DisassociateResourceSharePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresourcesharepermissionrequest"></a>
<a id="schema_DisassociateResourceSharePermissionRequest"></a>
<a id="tocSdisassociateresourcesharepermissionrequest"></a>
<a id="tocsdisassociateresourcesharepermissionrequest"></a>

```json
{
  "resourceShareArn": {},
  "permissionArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|true|none|none|
|permissionArn|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_DisassociateResourceShareRequest">DisassociateResourceShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresourcesharerequest"></a>
<a id="schema_DisassociateResourceShareRequest"></a>
<a id="tocSdisassociateresourcesharerequest"></a>
<a id="tocsdisassociateresourcesharerequest"></a>

```json
{
  "resourceShareArn": {},
  "resourceArns": {},
  "principals": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|true|none|none|
|resourceArns|object|false|none|none|
|principals|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_EnableSharingWithAwsOrganizationRequest">EnableSharingWithAwsOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablesharingwithawsorganizationrequest"></a>
<a id="schema_EnableSharingWithAwsOrganizationRequest"></a>
<a id="tocSenablesharingwithawsorganizationrequest"></a>
<a id="tocsenablesharingwithawsorganizationrequest"></a>

```json
{}
```

<h2 id="tocS_GetPermissionRequest">GetPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissionrequest"></a>
<a id="schema_GetPermissionRequest"></a>
<a id="tocSgetpermissionrequest"></a>
<a id="tocsgetpermissionrequest"></a>

```json
{
  "permissionArn": {},
  "permissionVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionArn|object|true|none|none|
|permissionVersion|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_GetResourcePoliciesRequest">GetResourcePoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepoliciesrequest"></a>
<a id="schema_GetResourcePoliciesRequest"></a>
<a id="tocSgetresourcepoliciesrequest"></a>
<a id="tocsgetresourcepoliciesrequest"></a>

```json
{
  "resourceArns": {},
  "principal": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArns|object|true|none|none|
|principal|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_PolicyList">PolicyList</h2>
<!-- backwards compatibility -->
<a id="schemapolicylist"></a>
<a id="schema_PolicyList"></a>
<a id="tocSpolicylist"></a>
<a id="tocspolicylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceShareAssociationType">ResourceShareAssociationType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareassociationtype"></a>
<a id="schema_ResourceShareAssociationType"></a>
<a id="tocSresourceshareassociationtype"></a>
<a id="tocsresourceshareassociationtype"></a>

```json
"PRINCIPAL"
```

<h2 id="tocS_ResourceShareArnList">ResourceShareArnList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharearnlist"></a>
<a id="schema_ResourceShareArnList"></a>
<a id="tocSresourcesharearnlist"></a>
<a id="tocsresourcesharearnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceShareAssociationStatus">ResourceShareAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareassociationstatus"></a>
<a id="schema_ResourceShareAssociationStatus"></a>
<a id="tocSresourceshareassociationstatus"></a>
<a id="tocsresourceshareassociationstatus"></a>

```json
"ASSOCIATING"
```

<h2 id="tocS_GetResourceShareAssociationsRequest">GetResourceShareAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceshareassociationsrequest"></a>
<a id="schema_GetResourceShareAssociationsRequest"></a>
<a id="tocSgetresourceshareassociationsrequest"></a>
<a id="tocsgetresourceshareassociationsrequest"></a>

```json
{
  "associationType": {},
  "resourceShareArns": {},
  "resourceArn": {},
  "principal": {},
  "associationStatus": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationType|object|true|none|none|
|resourceShareArns|object|false|none|none|
|resourceArn|object|false|none|none|
|principal|object|false|none|none|
|associationStatus|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ResourceShareInvitationArnList">ResourceShareInvitationArnList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareinvitationarnlist"></a>
<a id="schema_ResourceShareInvitationArnList"></a>
<a id="tocSresourceshareinvitationarnlist"></a>
<a id="tocsresourceshareinvitationarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetResourceShareInvitationsRequest">GetResourceShareInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceshareinvitationsrequest"></a>
<a id="schema_GetResourceShareInvitationsRequest"></a>
<a id="tocSgetresourceshareinvitationsrequest"></a>
<a id="tocsgetresourceshareinvitationsrequest"></a>

```json
{
  "resourceShareInvitationArns": {},
  "resourceShareArns": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareInvitationArns|object|false|none|none|
|resourceShareArns|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ResourceShareInvitationList">ResourceShareInvitationList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareinvitationlist"></a>
<a id="schema_ResourceShareInvitationList"></a>
<a id="tocSresourceshareinvitationlist"></a>
<a id="tocsresourceshareinvitationlist"></a>

```json
[
  {
    "resourceShareInvitationArn": {},
    "resourceShareName": {},
    "resourceShareArn": {},
    "senderAccountId": {},
    "receiverAccountId": {},
    "invitationTimestamp": {},
    "status": {},
    "resourceShareAssociations": {},
    "receiverArn": {}
  }
]
```

<h2 id="tocS_ResourceShareStatus">ResourceShareStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharestatus"></a>
<a id="schema_ResourceShareStatus"></a>
<a id="tocSresourcesharestatus"></a>
<a id="tocsresourcesharestatus"></a>

```json
"PENDING"
```

<h2 id="tocS_ResourceOwner">ResourceOwner</h2>
<!-- backwards compatibility -->
<a id="schemaresourceowner"></a>
<a id="schema_ResourceOwner"></a>
<a id="tocSresourceowner"></a>
<a id="tocsresourceowner"></a>

```json
"SELF"
```

<h2 id="tocS_TagFilters">TagFilters</h2>
<!-- backwards compatibility -->
<a id="schematagfilters"></a>
<a id="schema_TagFilters"></a>
<a id="tocStagfilters"></a>
<a id="tocstagfilters"></a>

```json
[
  {
    "tagKey": {},
    "tagValues": {}
  }
]
```

<h2 id="tocS_GetResourceSharesRequest">GetResourceSharesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesharesrequest"></a>
<a id="schema_GetResourceSharesRequest"></a>
<a id="tocSgetresourcesharesrequest"></a>
<a id="tocsgetresourcesharesrequest"></a>

```json
{
  "resourceShareArns": {},
  "resourceShareStatus": {},
  "resourceOwner": {},
  "name": {},
  "tagFilters": {},
  "nextToken": {},
  "maxResults": {},
  "permissionArn": {},
  "permissionVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArns|object|false|none|none|
|resourceShareStatus|object|false|none|none|
|resourceOwner|object|true|none|none|
|name|object|false|none|none|
|tagFilters|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|permissionArn|object|false|none|none|
|permissionVersion|object|false|none|none|

<h2 id="tocS_ResourceShareList">ResourceShareList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharelist"></a>
<a id="schema_ResourceShareList"></a>
<a id="tocSresourcesharelist"></a>
<a id="tocsresourcesharelist"></a>

```json
[
  {
    "resourceShareArn": {},
    "name": {},
    "owningAccountId": {},
    "allowExternalPrincipals": {},
    "status": {},
    "statusMessage": {},
    "tags": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "featureSet": {}
  }
]
```

<h2 id="tocS_ResourceRegionScopeFilter">ResourceRegionScopeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaresourceregionscopefilter"></a>
<a id="schema_ResourceRegionScopeFilter"></a>
<a id="tocSresourceregionscopefilter"></a>
<a id="tocsresourceregionscopefilter"></a>

```json
"ALL"
```

<h2 id="tocS_ListPendingInvitationResourcesRequest">ListPendingInvitationResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpendinginvitationresourcesrequest"></a>
<a id="schema_ListPendingInvitationResourcesRequest"></a>
<a id="tocSlistpendinginvitationresourcesrequest"></a>
<a id="tocslistpendinginvitationresourcesrequest"></a>

```json
{
  "resourceShareInvitationArn": {},
  "nextToken": {},
  "maxResults": {},
  "resourceRegionScope": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareInvitationArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|resourceRegionScope|object|false|none|none|

<h2 id="tocS_ResourceList">ResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelist"></a>
<a id="schema_ResourceList"></a>
<a id="tocSresourcelist"></a>
<a id="tocsresourcelist"></a>

```json
[
  {
    "arn": {},
    "type": {},
    "resourceShareArn": {},
    "resourceGroupArn": {},
    "status": {},
    "statusMessage": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "resourceRegionScope": {}
  }
]
```

<h2 id="tocS_ListPermissionAssociationsRequest">ListPermissionAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionassociationsrequest"></a>
<a id="schema_ListPermissionAssociationsRequest"></a>
<a id="tocSlistpermissionassociationsrequest"></a>
<a id="tocslistpermissionassociationsrequest"></a>

```json
{
  "permissionArn": {},
  "permissionVersion": {},
  "associationStatus": {},
  "resourceType": {},
  "featureSet": {},
  "defaultVersion": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionArn|object|false|none|none|
|permissionVersion|object|false|none|none|
|associationStatus|object|false|none|none|
|resourceType|object|false|none|none|
|featureSet|object|false|none|none|
|defaultVersion|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListPermissionVersionsRequest">ListPermissionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionversionsrequest"></a>
<a id="schema_ListPermissionVersionsRequest"></a>
<a id="tocSlistpermissionversionsrequest"></a>
<a id="tocslistpermissionversionsrequest"></a>

```json
{
  "permissionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ResourceSharePermissionList">ResourceSharePermissionList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharepermissionlist"></a>
<a id="schema_ResourceSharePermissionList"></a>
<a id="tocSresourcesharepermissionlist"></a>
<a id="tocsresourcesharepermissionlist"></a>

```json
[
  {
    "arn": {},
    "version": {},
    "defaultVersion": {},
    "name": {},
    "resourceType": {},
    "status": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "isResourceTypeDefault": {},
    "permissionType": {},
    "featureSet": {},
    "tags": {}
  }
]
```

<h2 id="tocS_PermissionTypeFilter">PermissionTypeFilter</h2>
<!-- backwards compatibility -->
<a id="schemapermissiontypefilter"></a>
<a id="schema_PermissionTypeFilter"></a>
<a id="tocSpermissiontypefilter"></a>
<a id="tocspermissiontypefilter"></a>

```json
"ALL"
```

<h2 id="tocS_ListPermissionsRequest">ListPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsrequest"></a>
<a id="schema_ListPermissionsRequest"></a>
<a id="tocSlistpermissionsrequest"></a>
<a id="tocslistpermissionsrequest"></a>

```json
{
  "resourceType": {},
  "nextToken": {},
  "maxResults": {},
  "permissionType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|permissionType|object|false|none|none|

<h2 id="tocS_ListPrincipalsRequest">ListPrincipalsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprincipalsrequest"></a>
<a id="schema_ListPrincipalsRequest"></a>
<a id="tocSlistprincipalsrequest"></a>
<a id="tocslistprincipalsrequest"></a>

```json
{
  "resourceOwner": {},
  "resourceArn": {},
  "principals": {},
  "resourceType": {},
  "resourceShareArns": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceOwner|object|true|none|none|
|resourceArn|object|false|none|none|
|principals|object|false|none|none|
|resourceType|object|false|none|none|
|resourceShareArns|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_PrincipalList">PrincipalList</h2>
<!-- backwards compatibility -->
<a id="schemaprincipallist"></a>
<a id="schema_PrincipalList"></a>
<a id="tocSprincipallist"></a>
<a id="tocsprincipallist"></a>

```json
[
  {
    "id": {},
    "resourceShareArn": {},
    "creationTime": {},
    "lastUpdatedTime": {},
    "external": {}
  }
]
```

<h2 id="tocS_ReplacePermissionAssociationsWorkIdList">ReplacePermissionAssociationsWorkIdList</h2>
<!-- backwards compatibility -->
<a id="schemareplacepermissionassociationsworkidlist"></a>
<a id="schema_ReplacePermissionAssociationsWorkIdList"></a>
<a id="tocSreplacepermissionassociationsworkidlist"></a>
<a id="tocsreplacepermissionassociationsworkidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplacePermissionAssociationsWorkStatus">ReplacePermissionAssociationsWorkStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplacepermissionassociationsworkstatus"></a>
<a id="schema_ReplacePermissionAssociationsWorkStatus"></a>
<a id="tocSreplacepermissionassociationsworkstatus"></a>
<a id="tocsreplacepermissionassociationsworkstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ListReplacePermissionAssociationsWorkRequest">ListReplacePermissionAssociationsWorkRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreplacepermissionassociationsworkrequest"></a>
<a id="schema_ListReplacePermissionAssociationsWorkRequest"></a>
<a id="tocSlistreplacepermissionassociationsworkrequest"></a>
<a id="tocslistreplacepermissionassociationsworkrequest"></a>

```json
{
  "workIds": {},
  "status": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workIds|object|false|none|none|
|status|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ReplacePermissionAssociationsWorkList">ReplacePermissionAssociationsWorkList</h2>
<!-- backwards compatibility -->
<a id="schemareplacepermissionassociationsworklist"></a>
<a id="schema_ReplacePermissionAssociationsWorkList"></a>
<a id="tocSreplacepermissionassociationsworklist"></a>
<a id="tocsreplacepermissionassociationsworklist"></a>

```json
[
  {
    "id": {},
    "fromPermissionArn": {},
    "fromPermissionVersion": {},
    "toPermissionArn": {},
    "toPermissionVersion": {},
    "status": {},
    "statusMessage": {},
    "creationTime": {},
    "lastUpdatedTime": {}
  }
]
```

<h2 id="tocS_ListResourceSharePermissionsRequest">ListResourceSharePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesharepermissionsrequest"></a>
<a id="schema_ListResourceSharePermissionsRequest"></a>
<a id="tocSlistresourcesharepermissionsrequest"></a>
<a id="tocslistresourcesharepermissionsrequest"></a>

```json
{
  "resourceShareArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListResourceTypesRequest">ListResourceTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcetypesrequest"></a>
<a id="schema_ListResourceTypesRequest"></a>
<a id="tocSlistresourcetypesrequest"></a>
<a id="tocslistresourcetypesrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {},
  "resourceRegionScope": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|resourceRegionScope|object|false|none|none|

<h2 id="tocS_ServiceNameAndResourceTypeList">ServiceNameAndResourceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaservicenameandresourcetypelist"></a>
<a id="schema_ServiceNameAndResourceTypeList"></a>
<a id="tocSservicenameandresourcetypelist"></a>
<a id="tocsservicenameandresourcetypelist"></a>

```json
[
  {
    "resourceType": {},
    "serviceName": {},
    "resourceRegionScope": {}
  }
]
```

<h2 id="tocS_ListResourcesRequest">ListResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesrequest"></a>
<a id="schema_ListResourcesRequest"></a>
<a id="tocSlistresourcesrequest"></a>
<a id="tocslistresourcesrequest"></a>

```json
{
  "resourceOwner": {},
  "principal": {},
  "resourceType": {},
  "resourceArns": {},
  "resourceShareArns": {},
  "nextToken": {},
  "maxResults": {},
  "resourceRegionScope": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceOwner|object|true|none|none|
|principal|object|false|none|none|
|resourceType|object|false|none|none|
|resourceArns|object|false|none|none|
|resourceShareArns|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|resourceRegionScope|object|false|none|none|

<h2 id="tocS_PermissionType">PermissionType</h2>
<!-- backwards compatibility -->
<a id="schemapermissiontype"></a>
<a id="schema_PermissionType"></a>
<a id="tocSpermissiontype"></a>
<a id="tocspermissiontype"></a>

```json
"CUSTOMER_MANAGED"
```

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
{
  "id": {},
  "resourceShareArn": {},
  "creationTime": {},
  "lastUpdatedTime": {},
  "external": {}
}
```

Describes a principal for use with Resource Access Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|resourceShareArn|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|external|object|false|none|none|

<h2 id="tocS_PromotePermissionCreatedFromPolicyRequest">PromotePermissionCreatedFromPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemapromotepermissioncreatedfrompolicyrequest"></a>
<a id="schema_PromotePermissionCreatedFromPolicyRequest"></a>
<a id="tocSpromotepermissioncreatedfrompolicyrequest"></a>
<a id="tocspromotepermissioncreatedfrompolicyrequest"></a>

```json
{
  "permissionArn": {},
  "name": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionArn|object|true|none|none|
|name|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_PromoteResourceShareCreatedFromPolicyRequest">PromoteResourceShareCreatedFromPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemapromoteresourcesharecreatedfrompolicyrequest"></a>
<a id="schema_PromoteResourceShareCreatedFromPolicyRequest"></a>
<a id="tocSpromoteresourcesharecreatedfrompolicyrequest"></a>
<a id="tocspromoteresourcesharecreatedfrompolicyrequest"></a>

```json
{}
```

<h2 id="tocS_RejectResourceShareInvitationRequest">RejectResourceShareInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectresourceshareinvitationrequest"></a>
<a id="schema_RejectResourceShareInvitationRequest"></a>
<a id="tocSrejectresourceshareinvitationrequest"></a>
<a id="tocsrejectresourceshareinvitationrequest"></a>

```json
{
  "resourceShareInvitationArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareInvitationArn|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ReplacePermissionAssociationsRequest">ReplacePermissionAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplacepermissionassociationsrequest"></a>
<a id="schema_ReplacePermissionAssociationsRequest"></a>
<a id="tocSreplacepermissionassociationsrequest"></a>
<a id="tocsreplacepermissionassociationsrequest"></a>

```json
{
  "fromPermissionArn": {},
  "fromPermissionVersion": {},
  "toPermissionArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromPermissionArn|object|true|none|none|
|fromPermissionVersion|object|false|none|none|
|toPermissionArn|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ReplacePermissionAssociationsWork">ReplacePermissionAssociationsWork</h2>
<!-- backwards compatibility -->
<a id="schemareplacepermissionassociationswork"></a>
<a id="schema_ReplacePermissionAssociationsWork"></a>
<a id="tocSreplacepermissionassociationswork"></a>
<a id="tocsreplacepermissionassociationswork"></a>

```json
{
  "id": {},
  "fromPermissionArn": {},
  "fromPermissionVersion": {},
  "toPermissionArn": {},
  "toPermissionVersion": {},
  "status": {},
  "statusMessage": {},
  "creationTime": {},
  "lastUpdatedTime": {}
}
```

A structure that represents the background work that RAM performs when you invoke the <a>ReplacePermissionAssociations</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|fromPermissionArn|object|false|none|none|
|fromPermissionVersion|object|false|none|none|
|toPermissionArn|object|false|none|none|
|toPermissionVersion|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|

<h2 id="tocS_ResourceStatus">ResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatus"></a>
<a id="schema_ResourceStatus"></a>
<a id="tocSresourcestatus"></a>
<a id="tocsresourcestatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_ResourceRegionScope">ResourceRegionScope</h2>
<!-- backwards compatibility -->
<a id="schemaresourceregionscope"></a>
<a id="schema_ResourceRegionScope"></a>
<a id="tocSresourceregionscope"></a>
<a id="tocsresourceregionscope"></a>

```json
"REGIONAL"
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "arn": {},
  "type": {},
  "resourceShareArn": {},
  "resourceGroupArn": {},
  "status": {},
  "statusMessage": {},
  "creationTime": {},
  "lastUpdatedTime": {},
  "resourceRegionScope": {}
}
```

Describes a resource associated with a resource share in RAM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|type|object|false|none|none|
|resourceShareArn|object|false|none|none|
|resourceGroupArn|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|resourceRegionScope|object|false|none|none|

<h2 id="tocS_ResourceShareFeatureSet">ResourceShareFeatureSet</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesharefeatureset"></a>
<a id="schema_ResourceShareFeatureSet"></a>
<a id="tocSresourcesharefeatureset"></a>
<a id="tocsresourcesharefeatureset"></a>

```json
"CREATED_FROM_POLICY"
```

<h2 id="tocS_ResourceShareAssociation">ResourceShareAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareassociation"></a>
<a id="schema_ResourceShareAssociation"></a>
<a id="tocSresourceshareassociation"></a>
<a id="tocsresourceshareassociation"></a>

```json
{
  "resourceShareArn": {},
  "resourceShareName": {},
  "associatedEntity": {},
  "associationType": {},
  "status": {},
  "statusMessage": {},
  "creationTime": {},
  "lastUpdatedTime": {},
  "external": {}
}
```

Describes an association between a resource share and either a principal or a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|false|none|none|
|resourceShareName|object|false|none|none|
|associatedEntity|object|false|none|none|
|associationType|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|external|object|false|none|none|

<h2 id="tocS_ResourceShareInvitationStatus">ResourceShareInvitationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourceshareinvitationstatus"></a>
<a id="schema_ResourceShareInvitationStatus"></a>
<a id="tocSresourceshareinvitationstatus"></a>
<a id="tocsresourceshareinvitationstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_ServiceNameAndResourceType">ServiceNameAndResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicenameandresourcetype"></a>
<a id="schema_ServiceNameAndResourceType"></a>
<a id="tocSservicenameandresourcetype"></a>
<a id="tocsservicenameandresourcetype"></a>

```json
{
  "resourceType": {},
  "serviceName": {},
  "resourceRegionScope": {}
}
```

Information about a shareable resource type and the Amazon Web Services service to which resources of that type belong.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|serviceName|object|false|none|none|
|resourceRegionScope|object|false|none|none|

<h2 id="tocS_SetDefaultPermissionVersionRequest">SetDefaultPermissionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetdefaultpermissionversionrequest"></a>
<a id="schema_SetDefaultPermissionVersionRequest"></a>
<a id="tocSsetdefaultpermissionversionrequest"></a>
<a id="tocssetdefaultpermissionversionrequest"></a>

```json
{
  "permissionArn": {},
  "permissionVersion": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionArn|object|true|none|none|
|permissionVersion|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_TagValueList">TagValueList</h2>
<!-- backwards compatibility -->
<a id="schematagvaluelist"></a>
<a id="schema_TagValueList"></a>
<a id="tocStagvaluelist"></a>
<a id="tocstagvaluelist"></a>

```json
[
  "string"
]
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
  "resourceShareArn": {},
  "tags": {},
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|false|none|none|
|tags|object|true|none|none|
|resourceArn|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "resourceShareArn": {},
  "tagKeys": {},
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|false|none|none|
|tagKeys|object|true|none|none|
|resourceArn|object|false|none|none|

<h2 id="tocS_UpdateResourceShareRequest">UpdateResourceShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcesharerequest"></a>
<a id="schema_UpdateResourceShareRequest"></a>
<a id="tocSupdateresourcesharerequest"></a>
<a id="tocsupdateresourcesharerequest"></a>

```json
{
  "resourceShareArn": {},
  "name": {},
  "allowExternalPrincipals": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceShareArn|object|true|none|none|
|name|object|false|none|none|
|allowExternalPrincipals|object|false|none|none|
|clientToken|object|false|none|none|
