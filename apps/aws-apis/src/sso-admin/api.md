<h1 id="aws-single-sign-on-admin">AWS Single Sign-On Admin v2020-07-20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create, or connect, your workforce identities and manage their access centrally across AWS accounts and applications. IAM Identity Center is the recommended approach for workforce authentication and authorization in AWS, for organizations of any size and type.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p>This reference guide provides information on single sign-on operations which could be used for access management of AWS accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as principals. For more information about how to work with principals and principal IDs in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API Reference</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

Base URLs:

* <a href="http://sso.us-east-1.amazonaws.com">http://sso.us-east-1.amazonaws.com</a> - The SSO Admin multi-region endpoint

* <a href="https://sso.us-east-1.amazonaws.com">https://sso.us-east-1.amazonaws.com</a> - The SSO Admin multi-region endpoint

* <a href="http://sso.cn-north-1.amazonaws.com.cn">http://sso.cn-north-1.amazonaws.com.cn</a> - The SSO Admin endpoint for China (Beijing) and China (Ningxia)

* <a href="https://sso.cn-north-1.amazonaws.com.cn">https://sso.cn-north-1.amazonaws.com.cn</a> - The SSO Admin endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sso/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-single-sign-on-admin-default">Default</h1>

## AttachCustomerManagedPolicyReferenceToPermissionSet

<a id="opIdAttachCustomerManagedPolicyReferenceToPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "CustomerManagedPolicyReference": {
      "Name": {},
      "Path": {}
    }
  }'
```

`POST /#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet`

Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "CustomerManagedPolicyReference": {
    "Name": {},
    "Path": {}
  }
}
```

<h3 id="attachcustomermanagedpolicyreferencetopermissionset-parameters">Parameters</h3>

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
|body|body|[AttachCustomerManagedPolicyReferenceToPermissionSetRequest](#schemaattachcustomermanagedpolicyreferencetopermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» CustomerManagedPolicyReference|body|object|true|none|
|» » Name|body|object|true|none|
|» » Path|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet|

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

<h3 id="attachcustomermanagedpolicyreferencetopermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachCustomerManagedPolicyReferenceToPermissionSetResponse](#schemaattachcustomermanagedpolicyreferencetopermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachManagedPolicyToPermissionSet

<a id="opIdAttachManagedPolicyToPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.AttachManagedPolicyToPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "ManagedPolicyArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet`

<p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "ManagedPolicyArn": {}
}
```

<h3 id="attachmanagedpolicytopermissionset-parameters">Parameters</h3>

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
|body|body|[AttachManagedPolicyToPermissionSetRequest](#schemaattachmanagedpolicytopermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» ManagedPolicyArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.AttachManagedPolicyToPermissionSet|

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

<h3 id="attachmanagedpolicytopermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachManagedPolicyToPermissionSetResponse](#schemaattachmanagedpolicytopermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccountAssignment

<a id="opIdCreateAccountAssignment"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.CreateAccountAssignment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.CreateAccountAssignment' \
  -d '{
    "InstanceArn": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.CreateAccountAssignment`

<p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>

> Body parameter

```json
{
  "InstanceArn": {},
  "TargetId": {},
  "TargetType": {},
  "PermissionSetArn": {},
  "PrincipalType": {},
  "PrincipalId": {}
}
```

<h3 id="createaccountassignment-parameters">Parameters</h3>

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
|body|body|[CreateAccountAssignmentRequest](#schemacreateaccountassignmentrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» TargetId|body|object|true|none|
|» TargetType|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» PrincipalType|body|object|true|none|
|» PrincipalId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.CreateAccountAssignment|

> Example responses

> 200 Response

```json
{
  "AccountAssignmentCreationStatus": {
    "Status": {},
    "RequestId": {},
    "FailureReason": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {},
    "CreatedDate": {}
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

<h3 id="createaccountassignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccountAssignmentResponse](#schemacreateaccountassignmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInstanceAccessControlAttributeConfiguration

<a id="opIdCreateInstanceAccessControlAttributeConfiguration"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.CreateInstanceAccessControlAttributeConfiguration' \
  -d '{
    "InstanceArn": {},
    "InstanceAccessControlAttributeConfiguration": {
      "AccessControlAttributes": {}
    }
  }'
```

`POST /#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration`

<p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>

> Body parameter

```json
{
  "InstanceArn": {},
  "InstanceAccessControlAttributeConfiguration": {
    "AccessControlAttributes": {}
  }
}
```

<h3 id="createinstanceaccesscontrolattributeconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateInstanceAccessControlAttributeConfigurationRequest](#schemacreateinstanceaccesscontrolattributeconfigurationrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» InstanceAccessControlAttributeConfiguration|body|object|true|none|
|» » AccessControlAttributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.CreateInstanceAccessControlAttributeConfiguration|

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

<h3 id="createinstanceaccesscontrolattributeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInstanceAccessControlAttributeConfigurationResponse](#schemacreateinstanceaccesscontrolattributeconfigurationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePermissionSet

<a id="opIdCreatePermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.CreatePermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.CreatePermissionSet' \
  -d '{
    "Name": {},
    "Description": {},
    "InstanceArn": {},
    "SessionDuration": {},
    "RelayState": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.CreatePermissionSet`

<p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "InstanceArn": {},
  "SessionDuration": {},
  "RelayState": {},
  "Tags": {}
}
```

<h3 id="createpermissionset-parameters">Parameters</h3>

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
|body|body|[CreatePermissionSetRequest](#schemacreatepermissionsetrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» InstanceArn|body|object|true|none|
|» SessionDuration|body|object|false|none|
|» RelayState|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.CreatePermissionSet|

> Example responses

> 200 Response

```json
{
  "PermissionSet": {
    "Name": {},
    "PermissionSetArn": {},
    "Description": {},
    "CreatedDate": {},
    "SessionDuration": {},
    "RelayState": {}
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

<h3 id="createpermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePermissionSetResponse](#schemacreatepermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccountAssignment

<a id="opIdDeleteAccountAssignment"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DeleteAccountAssignment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DeleteAccountAssignment' \
  -d '{
    "InstanceArn": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DeleteAccountAssignment`

<p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>

> Body parameter

```json
{
  "InstanceArn": {},
  "TargetId": {},
  "TargetType": {},
  "PermissionSetArn": {},
  "PrincipalType": {},
  "PrincipalId": {}
}
```

<h3 id="deleteaccountassignment-parameters">Parameters</h3>

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
|body|body|[DeleteAccountAssignmentRequest](#schemadeleteaccountassignmentrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» TargetId|body|object|true|none|
|» TargetType|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» PrincipalType|body|object|true|none|
|» PrincipalId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DeleteAccountAssignment|

> Example responses

> 200 Response

```json
{
  "AccountAssignmentDeletionStatus": {
    "Status": {},
    "RequestId": {},
    "FailureReason": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {},
    "CreatedDate": {}
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

<h3 id="deleteaccountassignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAccountAssignmentResponse](#schemadeleteaccountassignmentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInlinePolicyFromPermissionSet

<a id="opIdDeleteInlinePolicyFromPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DeleteInlinePolicyFromPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet`

Deletes the inline policy from a specified permission set.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

<h3 id="deleteinlinepolicyfrompermissionset-parameters">Parameters</h3>

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
|body|body|[DeleteInlinePolicyFromPermissionSetRequest](#schemadeleteinlinepolicyfrompermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DeleteInlinePolicyFromPermissionSet|

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

<h3 id="deleteinlinepolicyfrompermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInlinePolicyFromPermissionSetResponse](#schemadeleteinlinepolicyfrompermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInstanceAccessControlAttributeConfiguration

<a id="opIdDeleteInstanceAccessControlAttributeConfiguration"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration' \
  -d '{
    "InstanceArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration`

Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

> Body parameter

```json
{
  "InstanceArn": {}
}
```

<h3 id="deleteinstanceaccesscontrolattributeconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteInstanceAccessControlAttributeConfigurationRequest](#schemadeleteinstanceaccesscontrolattributeconfigurationrequest)|true|none|
|» InstanceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration|

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

<h3 id="deleteinstanceaccesscontrolattributeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInstanceAccessControlAttributeConfigurationResponse](#schemadeleteinstanceaccesscontrolattributeconfigurationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePermissionSet

<a id="opIdDeletePermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DeletePermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DeletePermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DeletePermissionSet`

Deletes the specified permission set.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

<h3 id="deletepermissionset-parameters">Parameters</h3>

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
|body|body|[DeletePermissionSetRequest](#schemadeletepermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DeletePermissionSet|

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

<h3 id="deletepermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePermissionSetResponse](#schemadeletepermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePermissionsBoundaryFromPermissionSet

<a id="opIdDeletePermissionsBoundaryFromPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DeletePermissionsBoundaryFromPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet`

Deletes the permissions boundary from a specified <a>PermissionSet</a>.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

<h3 id="deletepermissionsboundaryfrompermissionset-parameters">Parameters</h3>

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
|body|body|[DeletePermissionsBoundaryFromPermissionSetRequest](#schemadeletepermissionsboundaryfrompermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DeletePermissionsBoundaryFromPermissionSet|

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

<h3 id="deletepermissionsboundaryfrompermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePermissionsBoundaryFromPermissionSetResponse](#schemadeletepermissionsboundaryfrompermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountAssignmentCreationStatus

<a id="opIdDescribeAccountAssignmentCreationStatus"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DescribeAccountAssignmentCreationStatus' \
  -d '{
    "InstanceArn": {},
    "AccountAssignmentCreationRequestId": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus`

Describes the status of the assignment creation request.

> Body parameter

```json
{
  "InstanceArn": {},
  "AccountAssignmentCreationRequestId": {}
}
```

<h3 id="describeaccountassignmentcreationstatus-parameters">Parameters</h3>

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
|body|body|[DescribeAccountAssignmentCreationStatusRequest](#schemadescribeaccountassignmentcreationstatusrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» AccountAssignmentCreationRequestId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DescribeAccountAssignmentCreationStatus|

> Example responses

> 200 Response

```json
{
  "AccountAssignmentCreationStatus": {
    "Status": {},
    "RequestId": {},
    "FailureReason": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {},
    "CreatedDate": {}
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

<h3 id="describeaccountassignmentcreationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountAssignmentCreationStatusResponse](#schemadescribeaccountassignmentcreationstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountAssignmentDeletionStatus

<a id="opIdDescribeAccountAssignmentDeletionStatus"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DescribeAccountAssignmentDeletionStatus' \
  -d '{
    "InstanceArn": {},
    "AccountAssignmentDeletionRequestId": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus`

Describes the status of the assignment deletion request.

> Body parameter

```json
{
  "InstanceArn": {},
  "AccountAssignmentDeletionRequestId": {}
}
```

<h3 id="describeaccountassignmentdeletionstatus-parameters">Parameters</h3>

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
|body|body|[DescribeAccountAssignmentDeletionStatusRequest](#schemadescribeaccountassignmentdeletionstatusrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» AccountAssignmentDeletionRequestId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DescribeAccountAssignmentDeletionStatus|

> Example responses

> 200 Response

```json
{
  "AccountAssignmentDeletionStatus": {
    "Status": {},
    "RequestId": {},
    "FailureReason": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {},
    "CreatedDate": {}
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

<h3 id="describeaccountassignmentdeletionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountAssignmentDeletionStatusResponse](#schemadescribeaccountassignmentdeletionstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstanceAccessControlAttributeConfiguration

<a id="opIdDescribeInstanceAccessControlAttributeConfiguration"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration' \
  -d '{
    "InstanceArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration`

Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

> Body parameter

```json
{
  "InstanceArn": {}
}
```

<h3 id="describeinstanceaccesscontrolattributeconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeInstanceAccessControlAttributeConfigurationRequest](#schemadescribeinstanceaccesscontrolattributeconfigurationrequest)|true|none|
|» InstanceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "StatusReason": {},
  "InstanceAccessControlAttributeConfiguration": {
    "AccessControlAttributes": {}
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

<h3 id="describeinstanceaccesscontrolattributeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstanceAccessControlAttributeConfigurationResponse](#schemadescribeinstanceaccesscontrolattributeconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePermissionSet

<a id="opIdDescribePermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DescribePermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DescribePermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DescribePermissionSet`

Gets the details of the permission set.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

<h3 id="describepermissionset-parameters">Parameters</h3>

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
|body|body|[DescribePermissionSetRequest](#schemadescribepermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DescribePermissionSet|

> Example responses

> 200 Response

```json
{
  "PermissionSet": {
    "Name": {},
    "PermissionSetArn": {},
    "Description": {},
    "CreatedDate": {},
    "SessionDuration": {},
    "RelayState": {}
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

<h3 id="describepermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePermissionSetResponse](#schemadescribepermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePermissionSetProvisioningStatus

<a id="opIdDescribePermissionSetProvisioningStatus"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DescribePermissionSetProvisioningStatus' \
  -d '{
    "InstanceArn": {},
    "ProvisionPermissionSetRequestId": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus`

Describes the status for the given permission set provisioning request.

> Body parameter

```json
{
  "InstanceArn": {},
  "ProvisionPermissionSetRequestId": {}
}
```

<h3 id="describepermissionsetprovisioningstatus-parameters">Parameters</h3>

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
|body|body|[DescribePermissionSetProvisioningStatusRequest](#schemadescribepermissionsetprovisioningstatusrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» ProvisionPermissionSetRequestId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DescribePermissionSetProvisioningStatus|

> Example responses

> 200 Response

```json
{
  "PermissionSetProvisioningStatus": {
    "Status": {},
    "RequestId": {},
    "AccountId": {},
    "PermissionSetArn": {},
    "FailureReason": {},
    "CreatedDate": {}
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

<h3 id="describepermissionsetprovisioningstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePermissionSetProvisioningStatusResponse](#schemadescribepermissionsetprovisioningstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachCustomerManagedPolicyReferenceFromPermissionSet

<a id="opIdDetachCustomerManagedPolicyReferenceFromPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "CustomerManagedPolicyReference": {
      "Name": {},
      "Path": {}
    }
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet`

Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "CustomerManagedPolicyReference": {
    "Name": {},
    "Path": {}
  }
}
```

<h3 id="detachcustomermanagedpolicyreferencefrompermissionset-parameters">Parameters</h3>

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
|body|body|[DetachCustomerManagedPolicyReferenceFromPermissionSetRequest](#schemadetachcustomermanagedpolicyreferencefrompermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» CustomerManagedPolicyReference|body|object|true|none|
|» » Name|body|object|true|none|
|» » Path|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet|

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

<h3 id="detachcustomermanagedpolicyreferencefrompermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachCustomerManagedPolicyReferenceFromPermissionSetResponse](#schemadetachcustomermanagedpolicyreferencefrompermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachManagedPolicyFromPermissionSet

<a id="opIdDetachManagedPolicyFromPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.DetachManagedPolicyFromPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "ManagedPolicyArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet`

Detaches the attached AWS managed policy ARN from the specified permission set.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "ManagedPolicyArn": {}
}
```

<h3 id="detachmanagedpolicyfrompermissionset-parameters">Parameters</h3>

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
|body|body|[DetachManagedPolicyFromPermissionSetRequest](#schemadetachmanagedpolicyfrompermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» ManagedPolicyArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.DetachManagedPolicyFromPermissionSet|

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

<h3 id="detachmanagedpolicyfrompermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachManagedPolicyFromPermissionSetResponse](#schemadetachmanagedpolicyfrompermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInlinePolicyForPermissionSet

<a id="opIdGetInlinePolicyForPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.GetInlinePolicyForPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet`

Obtains the inline policy assigned to the permission set.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

<h3 id="getinlinepolicyforpermissionset-parameters">Parameters</h3>

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
|body|body|[GetInlinePolicyForPermissionSetRequest](#schemagetinlinepolicyforpermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.GetInlinePolicyForPermissionSet|

> Example responses

> 200 Response

```json
{
  "InlinePolicy": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getinlinepolicyforpermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInlinePolicyForPermissionSetResponse](#schemagetinlinepolicyforpermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPermissionsBoundaryForPermissionSet

<a id="opIdGetPermissionsBoundaryForPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.GetPermissionsBoundaryForPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet`

Obtains the permissions boundary for a specified <a>PermissionSet</a>.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

<h3 id="getpermissionsboundaryforpermissionset-parameters">Parameters</h3>

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
|body|body|[GetPermissionsBoundaryForPermissionSetRequest](#schemagetpermissionsboundaryforpermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.GetPermissionsBoundaryForPermissionSet|

> Example responses

> 200 Response

```json
{
  "PermissionsBoundary": {
    "CustomerManagedPolicyReference": {
      "Name": {},
      "Path": {}
    },
    "ManagedPolicyArn": {}
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

<h3 id="getpermissionsboundaryforpermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPermissionsBoundaryForPermissionSetResponse](#schemagetpermissionsboundaryforpermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccountAssignmentCreationStatus

<a id="opIdListAccountAssignmentCreationStatus"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListAccountAssignmentCreationStatus' \
  -d '{
    "InstanceArn": {},
    "MaxResults": {},
    "NextToken": {},
    "Filter": {
      "Status": {}
    }
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus`

Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.

> Body parameter

```json
{
  "InstanceArn": {},
  "MaxResults": {},
  "NextToken": {},
  "Filter": {
    "Status": {}
  }
}
```

<h3 id="listaccountassignmentcreationstatus-parameters">Parameters</h3>

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
|body|body|[ListAccountAssignmentCreationStatusRequest](#schemalistaccountassignmentcreationstatusrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filter|body|object|false|none|
|» » Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListAccountAssignmentCreationStatus|

> Example responses

> 200 Response

```json
{
  "AccountAssignmentsCreationStatus": {},
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

<h3 id="listaccountassignmentcreationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountAssignmentCreationStatusResponse](#schemalistaccountassignmentcreationstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccountAssignmentDeletionStatus

<a id="opIdListAccountAssignmentDeletionStatus"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListAccountAssignmentDeletionStatus' \
  -d '{
    "InstanceArn": {},
    "MaxResults": {},
    "NextToken": {},
    "Filter": {
      "Status": {}
    }
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus`

Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.

> Body parameter

```json
{
  "InstanceArn": {},
  "MaxResults": {},
  "NextToken": {},
  "Filter": {
    "Status": {}
  }
}
```

<h3 id="listaccountassignmentdeletionstatus-parameters">Parameters</h3>

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
|body|body|[ListAccountAssignmentDeletionStatusRequest](#schemalistaccountassignmentdeletionstatusrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filter|body|object|false|none|
|» » Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListAccountAssignmentDeletionStatus|

> Example responses

> 200 Response

```json
{
  "AccountAssignmentsDeletionStatus": {},
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

<h3 id="listaccountassignmentdeletionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountAssignmentDeletionStatusResponse](#schemalistaccountassignmentdeletionstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccountAssignments

<a id="opIdListAccountAssignments"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListAccountAssignments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListAccountAssignments' \
  -d '{
    "InstanceArn": {},
    "AccountId": {},
    "PermissionSetArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListAccountAssignments`

Lists the assignee of the specified AWS account with the specified permission set.

> Body parameter

```json
{
  "InstanceArn": {},
  "AccountId": {},
  "PermissionSetArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listaccountassignments-parameters">Parameters</h3>

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
|body|body|[ListAccountAssignmentsRequest](#schemalistaccountassignmentsrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» AccountId|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListAccountAssignments|

> Example responses

> 200 Response

```json
{
  "AccountAssignments": {},
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

<h3 id="listaccountassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountAssignmentsResponse](#schemalistaccountassignmentsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccountsForProvisionedPermissionSet

<a id="opIdListAccountsForProvisionedPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListAccountsForProvisionedPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "ProvisioningStatus": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet`

Lists all the AWS accounts where the specified permission set is provisioned.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "ProvisioningStatus": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listaccountsforprovisionedpermissionset-parameters">Parameters</h3>

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
|body|body|[ListAccountsForProvisionedPermissionSetRequest](#schemalistaccountsforprovisionedpermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» ProvisioningStatus|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListAccountsForProvisionedPermissionSet|

> Example responses

> 200 Response

```json
{
  "AccountIds": {},
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

<h3 id="listaccountsforprovisionedpermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountsForProvisionedPermissionSetResponse](#schemalistaccountsforprovisionedpermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCustomerManagedPolicyReferencesInPermissionSet

<a id="opIdListCustomerManagedPolicyReferencesInPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet`

Lists all customer managed policies attached to a specified <a>PermissionSet</a>.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcustomermanagedpolicyreferencesinpermissionset-parameters">Parameters</h3>

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
|body|body|[ListCustomerManagedPolicyReferencesInPermissionSetRequest](#schemalistcustomermanagedpolicyreferencesinpermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet|

> Example responses

> 200 Response

```json
{
  "CustomerManagedPolicyReferences": {},
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

<h3 id="listcustomermanagedpolicyreferencesinpermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomerManagedPolicyReferencesInPermissionSetResponse](#schemalistcustomermanagedpolicyreferencesinpermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstances

<a id="opIdListInstances"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListInstances' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListInstances`

Lists the IAM Identity Center instances that the caller has access to.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listinstances-parameters">Parameters</h3>

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
|body|body|[ListInstancesRequest](#schemalistinstancesrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListInstances|

> Example responses

> 200 Response

```json
{
  "Instances": {},
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

<h3 id="listinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstancesResponse](#schemalistinstancesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListManagedPoliciesInPermissionSet

<a id="opIdListManagedPoliciesInPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListManagedPoliciesInPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet`

Lists the AWS managed policy that is attached to a specified permission set.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listmanagedpoliciesinpermissionset-parameters">Parameters</h3>

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
|body|body|[ListManagedPoliciesInPermissionSetRequest](#schemalistmanagedpoliciesinpermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListManagedPoliciesInPermissionSet|

> Example responses

> 200 Response

```json
{
  "AttachedManagedPolicies": {},
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

<h3 id="listmanagedpoliciesinpermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListManagedPoliciesInPermissionSetResponse](#schemalistmanagedpoliciesinpermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissionSetProvisioningStatus

<a id="opIdListPermissionSetProvisioningStatus"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListPermissionSetProvisioningStatus' \
  -d '{
    "InstanceArn": {},
    "MaxResults": {},
    "NextToken": {},
    "Filter": {
      "Status": {}
    }
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus`

Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.

> Body parameter

```json
{
  "InstanceArn": {},
  "MaxResults": {},
  "NextToken": {},
  "Filter": {
    "Status": {}
  }
}
```

<h3 id="listpermissionsetprovisioningstatus-parameters">Parameters</h3>

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
|body|body|[ListPermissionSetProvisioningStatusRequest](#schemalistpermissionsetprovisioningstatusrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filter|body|object|false|none|
|» » Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListPermissionSetProvisioningStatus|

> Example responses

> 200 Response

```json
{
  "PermissionSetsProvisioningStatus": {},
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

<h3 id="listpermissionsetprovisioningstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionSetProvisioningStatusResponse](#schemalistpermissionsetprovisioningstatusresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissionSets

<a id="opIdListPermissionSets"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListPermissionSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListPermissionSets' \
  -d '{
    "InstanceArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListPermissionSets`

Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.

> Body parameter

```json
{
  "InstanceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpermissionsets-parameters">Parameters</h3>

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
|body|body|[ListPermissionSetsRequest](#schemalistpermissionsetsrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListPermissionSets|

> Example responses

> 200 Response

```json
{
  "PermissionSets": {},
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

<h3 id="listpermissionsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionSetsResponse](#schemalistpermissionsetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissionSetsProvisionedToAccount

<a id="opIdListPermissionSetsProvisionedToAccount"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListPermissionSetsProvisionedToAccount' \
  -d '{
    "InstanceArn": {},
    "AccountId": {},
    "ProvisioningStatus": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount`

Lists all the permission sets that are provisioned to a specified AWS account.

> Body parameter

```json
{
  "InstanceArn": {},
  "AccountId": {},
  "ProvisioningStatus": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listpermissionsetsprovisionedtoaccount-parameters">Parameters</h3>

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
|body|body|[ListPermissionSetsProvisionedToAccountRequest](#schemalistpermissionsetsprovisionedtoaccountrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» AccountId|body|object|true|none|
|» ProvisioningStatus|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListPermissionSetsProvisionedToAccount|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "PermissionSets": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listpermissionsetsprovisionedtoaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionSetsProvisionedToAccountResponse](#schemalistpermissionsetsprovisionedtoaccountresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ListTagsForResource' \
  -d '{
    "InstanceArn": {},
    "ResourceArn": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ListTagsForResource`

Lists the tags that are attached to a specified resource.

> Body parameter

```json
{
  "InstanceArn": {},
  "ResourceArn": {},
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
|» InstanceArn|body|object|true|none|
|» ResourceArn|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ProvisionPermissionSet

<a id="opIdProvisionPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.ProvisionPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.ProvisionPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "TargetId": {},
    "TargetType": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.ProvisionPermissionSet`

The process by which a specified permission set is provisioned to the specified target.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "TargetId": {},
  "TargetType": {}
}
```

<h3 id="provisionpermissionset-parameters">Parameters</h3>

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
|body|body|[ProvisionPermissionSetRequest](#schemaprovisionpermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» TargetId|body|object|false|none|
|» TargetType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.ProvisionPermissionSet|

> Example responses

> 200 Response

```json
{
  "PermissionSetProvisioningStatus": {
    "Status": {},
    "RequestId": {},
    "AccountId": {},
    "PermissionSetArn": {},
    "FailureReason": {},
    "CreatedDate": {}
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

<h3 id="provisionpermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProvisionPermissionSetResponse](#schemaprovisionpermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutInlinePolicyToPermissionSet

<a id="opIdPutInlinePolicyToPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.PutInlinePolicyToPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "InlinePolicy": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet`

<p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "InlinePolicy": {}
}
```

<h3 id="putinlinepolicytopermissionset-parameters">Parameters</h3>

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
|body|body|[PutInlinePolicyToPermissionSetRequest](#schemaputinlinepolicytopermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» InlinePolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.PutInlinePolicyToPermissionSet|

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

<h3 id="putinlinepolicytopermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutInlinePolicyToPermissionSetResponse](#schemaputinlinepolicytopermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPermissionsBoundaryToPermissionSet

<a id="opIdPutPermissionsBoundaryToPermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.PutPermissionsBoundaryToPermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "PermissionsBoundary": {
      "CustomerManagedPolicyReference": {
        "Name": {},
        "Path": {}
      },
      "ManagedPolicyArn": {}
    }
  }'
```

`POST /#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet`

Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "PermissionsBoundary": {
    "CustomerManagedPolicyReference": {
      "Name": {},
      "Path": {}
    },
    "ManagedPolicyArn": {}
  }
}
```

<h3 id="putpermissionsboundarytopermissionset-parameters">Parameters</h3>

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
|body|body|[PutPermissionsBoundaryToPermissionSetRequest](#schemaputpermissionsboundarytopermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» PermissionsBoundary|body|object|true|none|
|» » CustomerManagedPolicyReference|body|object|false|none|
|» » » Name|body|object|true|none|
|» » » Path|body|object|false|none|
|» » ManagedPolicyArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.PutPermissionsBoundaryToPermissionSet|

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

<h3 id="putpermissionsboundarytopermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPermissionsBoundaryToPermissionSetResponse](#schemaputpermissionsboundarytopermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.TagResource' \
  -d '{
    "InstanceArn": {},
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.TagResource`

Associates a set of tags with a specified resource.

> Body parameter

```json
{
  "InstanceArn": {},
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
|» InstanceArn|body|object|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.TagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.UntagResource' \
  -d '{
    "InstanceArn": {},
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.UntagResource`

Disassociates a set of tags from a specified resource.

> Body parameter

```json
{
  "InstanceArn": {},
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
|» InstanceArn|body|object|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.UntagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInstanceAccessControlAttributeConfiguration

<a id="opIdUpdateInstanceAccessControlAttributeConfiguration"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration' \
  -d '{
    "InstanceArn": {},
    "InstanceAccessControlAttributeConfiguration": {
      "AccessControlAttributes": {}
    }
  }'
```

`POST /#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration`

Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

> Body parameter

```json
{
  "InstanceArn": {},
  "InstanceAccessControlAttributeConfiguration": {
    "AccessControlAttributes": {}
  }
}
```

<h3 id="updateinstanceaccesscontrolattributeconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateInstanceAccessControlAttributeConfigurationRequest](#schemaupdateinstanceaccesscontrolattributeconfigurationrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» InstanceAccessControlAttributeConfiguration|body|object|true|none|
|» » AccessControlAttributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration|

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

<h3 id="updateinstanceaccesscontrolattributeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateInstanceAccessControlAttributeConfigurationResponse](#schemaupdateinstanceaccesscontrolattributeconfigurationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePermissionSet

<a id="opIdUpdatePermissionSet"></a>

> Code samples

```bash
curl 'https://sso-admin.us-east-1.amazonaws.com/#X-Amz-Target=SWBExternalService.UpdatePermissionSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SWBExternalService.UpdatePermissionSet' \
  -d '{
    "InstanceArn": {},
    "PermissionSetArn": {},
    "Description": {},
    "SessionDuration": {},
    "RelayState": {}
  }'
```

`POST /#X-Amz-Target=SWBExternalService.UpdatePermissionSet`

Updates an existing permission set.

> Body parameter

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "Description": {},
  "SessionDuration": {},
  "RelayState": {}
}
```

<h3 id="updatepermissionset-parameters">Parameters</h3>

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
|body|body|[UpdatePermissionSetRequest](#schemaupdatepermissionsetrequest)|true|none|
|» InstanceArn|body|object|true|none|
|» PermissionSetArn|body|object|true|none|
|» Description|body|object|false|none|
|» SessionDuration|body|object|false|none|
|» RelayState|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SWBExternalService.UpdatePermissionSet|

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

<h3 id="updatepermissionset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePermissionSetResponse](#schemaupdatepermissionsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AttachCustomerManagedPolicyReferenceToPermissionSetResponse">AttachCustomerManagedPolicyReferenceToPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachcustomermanagedpolicyreferencetopermissionsetresponse"></a>
<a id="schema_AttachCustomerManagedPolicyReferenceToPermissionSetResponse"></a>
<a id="tocSattachcustomermanagedpolicyreferencetopermissionsetresponse"></a>
<a id="tocsattachcustomermanagedpolicyreferencetopermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_AttachCustomerManagedPolicyReferenceToPermissionSetRequest">AttachCustomerManagedPolicyReferenceToPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachcustomermanagedpolicyreferencetopermissionsetrequest"></a>
<a id="schema_AttachCustomerManagedPolicyReferenceToPermissionSetRequest"></a>
<a id="tocSattachcustomermanagedpolicyreferencetopermissionsetrequest"></a>
<a id="tocsattachcustomermanagedpolicyreferencetopermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "CustomerManagedPolicyReference": {
    "Name": {},
    "Path": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|CustomerManagedPolicyReference|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_AttachManagedPolicyToPermissionSetResponse">AttachManagedPolicyToPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachmanagedpolicytopermissionsetresponse"></a>
<a id="schema_AttachManagedPolicyToPermissionSetResponse"></a>
<a id="tocSattachmanagedpolicytopermissionsetresponse"></a>
<a id="tocsattachmanagedpolicytopermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_AttachManagedPolicyToPermissionSetRequest">AttachManagedPolicyToPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachmanagedpolicytopermissionsetrequest"></a>
<a id="schema_AttachManagedPolicyToPermissionSetRequest"></a>
<a id="tocSattachmanagedpolicytopermissionsetrequest"></a>
<a id="tocsattachmanagedpolicytopermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "ManagedPolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|ManagedPolicyArn|object|true|none|none|

<h2 id="tocS_CreateAccountAssignmentResponse">CreateAccountAssignmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountassignmentresponse"></a>
<a id="schema_CreateAccountAssignmentResponse"></a>
<a id="tocScreateaccountassignmentresponse"></a>
<a id="tocscreateaccountassignmentresponse"></a>

```json
{
  "AccountAssignmentCreationStatus": {
    "Status": {},
    "RequestId": {},
    "FailureReason": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {},
    "CreatedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountAssignmentCreationStatus|object|false|none|none|

<h2 id="tocS_CreateAccountAssignmentRequest">CreateAccountAssignmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountassignmentrequest"></a>
<a id="schema_CreateAccountAssignmentRequest"></a>
<a id="tocScreateaccountassignmentrequest"></a>
<a id="tocscreateaccountassignmentrequest"></a>

```json
{
  "InstanceArn": {},
  "TargetId": {},
  "TargetType": {},
  "PermissionSetArn": {},
  "PrincipalType": {},
  "PrincipalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|TargetId|object|true|none|none|
|TargetType|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|PrincipalType|object|true|none|none|
|PrincipalId|object|true|none|none|

<h2 id="tocS_CreateInstanceAccessControlAttributeConfigurationResponse">CreateInstanceAccessControlAttributeConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstanceaccesscontrolattributeconfigurationresponse"></a>
<a id="schema_CreateInstanceAccessControlAttributeConfigurationResponse"></a>
<a id="tocScreateinstanceaccesscontrolattributeconfigurationresponse"></a>
<a id="tocscreateinstanceaccesscontrolattributeconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_CreateInstanceAccessControlAttributeConfigurationRequest">CreateInstanceAccessControlAttributeConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstanceaccesscontrolattributeconfigurationrequest"></a>
<a id="schema_CreateInstanceAccessControlAttributeConfigurationRequest"></a>
<a id="tocScreateinstanceaccesscontrolattributeconfigurationrequest"></a>
<a id="tocscreateinstanceaccesscontrolattributeconfigurationrequest"></a>

```json
{
  "InstanceArn": {},
  "InstanceAccessControlAttributeConfiguration": {
    "AccessControlAttributes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|InstanceAccessControlAttributeConfiguration|object|true|none|none|

<h2 id="tocS_CreatePermissionSetResponse">CreatePermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissionsetresponse"></a>
<a id="schema_CreatePermissionSetResponse"></a>
<a id="tocScreatepermissionsetresponse"></a>
<a id="tocscreatepermissionsetresponse"></a>

```json
{
  "PermissionSet": {
    "Name": {},
    "PermissionSetArn": {},
    "Description": {},
    "CreatedDate": {},
    "SessionDuration": {},
    "RelayState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionSet|object|false|none|none|

<h2 id="tocS_CreatePermissionSetRequest">CreatePermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissionsetrequest"></a>
<a id="schema_CreatePermissionSetRequest"></a>
<a id="tocScreatepermissionsetrequest"></a>
<a id="tocscreatepermissionsetrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "InstanceArn": {},
  "SessionDuration": {},
  "RelayState": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|InstanceArn|object|true|none|none|
|SessionDuration|object|false|none|none|
|RelayState|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteAccountAssignmentResponse">DeleteAccountAssignmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccountassignmentresponse"></a>
<a id="schema_DeleteAccountAssignmentResponse"></a>
<a id="tocSdeleteaccountassignmentresponse"></a>
<a id="tocsdeleteaccountassignmentresponse"></a>

```json
{
  "AccountAssignmentDeletionStatus": {
    "Status": {},
    "RequestId": {},
    "FailureReason": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {},
    "CreatedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountAssignmentDeletionStatus|object|false|none|none|

<h2 id="tocS_DeleteAccountAssignmentRequest">DeleteAccountAssignmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccountassignmentrequest"></a>
<a id="schema_DeleteAccountAssignmentRequest"></a>
<a id="tocSdeleteaccountassignmentrequest"></a>
<a id="tocsdeleteaccountassignmentrequest"></a>

```json
{
  "InstanceArn": {},
  "TargetId": {},
  "TargetType": {},
  "PermissionSetArn": {},
  "PrincipalType": {},
  "PrincipalId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|TargetId|object|true|none|none|
|TargetType|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|PrincipalType|object|true|none|none|
|PrincipalId|object|true|none|none|

<h2 id="tocS_DeleteInlinePolicyFromPermissionSetResponse">DeleteInlinePolicyFromPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinlinepolicyfrompermissionsetresponse"></a>
<a id="schema_DeleteInlinePolicyFromPermissionSetResponse"></a>
<a id="tocSdeleteinlinepolicyfrompermissionsetresponse"></a>
<a id="tocsdeleteinlinepolicyfrompermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteInlinePolicyFromPermissionSetRequest">DeleteInlinePolicyFromPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinlinepolicyfrompermissionsetrequest"></a>
<a id="schema_DeleteInlinePolicyFromPermissionSetRequest"></a>
<a id="tocSdeleteinlinepolicyfrompermissionsetrequest"></a>
<a id="tocsdeleteinlinepolicyfrompermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|

<h2 id="tocS_DeleteInstanceAccessControlAttributeConfigurationResponse">DeleteInstanceAccessControlAttributeConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstanceaccesscontrolattributeconfigurationresponse"></a>
<a id="schema_DeleteInstanceAccessControlAttributeConfigurationResponse"></a>
<a id="tocSdeleteinstanceaccesscontrolattributeconfigurationresponse"></a>
<a id="tocsdeleteinstanceaccesscontrolattributeconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteInstanceAccessControlAttributeConfigurationRequest">DeleteInstanceAccessControlAttributeConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstanceaccesscontrolattributeconfigurationrequest"></a>
<a id="schema_DeleteInstanceAccessControlAttributeConfigurationRequest"></a>
<a id="tocSdeleteinstanceaccesscontrolattributeconfigurationrequest"></a>
<a id="tocsdeleteinstanceaccesscontrolattributeconfigurationrequest"></a>

```json
{
  "InstanceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|

<h2 id="tocS_DeletePermissionSetResponse">DeletePermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionsetresponse"></a>
<a id="schema_DeletePermissionSetResponse"></a>
<a id="tocSdeletepermissionsetresponse"></a>
<a id="tocsdeletepermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePermissionSetRequest">DeletePermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionsetrequest"></a>
<a id="schema_DeletePermissionSetRequest"></a>
<a id="tocSdeletepermissionsetrequest"></a>
<a id="tocsdeletepermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|

<h2 id="tocS_DeletePermissionsBoundaryFromPermissionSetResponse">DeletePermissionsBoundaryFromPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionsboundaryfrompermissionsetresponse"></a>
<a id="schema_DeletePermissionsBoundaryFromPermissionSetResponse"></a>
<a id="tocSdeletepermissionsboundaryfrompermissionsetresponse"></a>
<a id="tocsdeletepermissionsboundaryfrompermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePermissionsBoundaryFromPermissionSetRequest">DeletePermissionsBoundaryFromPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionsboundaryfrompermissionsetrequest"></a>
<a id="schema_DeletePermissionsBoundaryFromPermissionSetRequest"></a>
<a id="tocSdeletepermissionsboundaryfrompermissionsetrequest"></a>
<a id="tocsdeletepermissionsboundaryfrompermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|

<h2 id="tocS_DescribeAccountAssignmentCreationStatusResponse">DescribeAccountAssignmentCreationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountassignmentcreationstatusresponse"></a>
<a id="schema_DescribeAccountAssignmentCreationStatusResponse"></a>
<a id="tocSdescribeaccountassignmentcreationstatusresponse"></a>
<a id="tocsdescribeaccountassignmentcreationstatusresponse"></a>

```json
{
  "AccountAssignmentCreationStatus": {
    "Status": {},
    "RequestId": {},
    "FailureReason": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {},
    "CreatedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountAssignmentCreationStatus|object|false|none|none|

<h2 id="tocS_DescribeAccountAssignmentCreationStatusRequest">DescribeAccountAssignmentCreationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountassignmentcreationstatusrequest"></a>
<a id="schema_DescribeAccountAssignmentCreationStatusRequest"></a>
<a id="tocSdescribeaccountassignmentcreationstatusrequest"></a>
<a id="tocsdescribeaccountassignmentcreationstatusrequest"></a>

```json
{
  "InstanceArn": {},
  "AccountAssignmentCreationRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|AccountAssignmentCreationRequestId|object|true|none|none|

<h2 id="tocS_DescribeAccountAssignmentDeletionStatusResponse">DescribeAccountAssignmentDeletionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountassignmentdeletionstatusresponse"></a>
<a id="schema_DescribeAccountAssignmentDeletionStatusResponse"></a>
<a id="tocSdescribeaccountassignmentdeletionstatusresponse"></a>
<a id="tocsdescribeaccountassignmentdeletionstatusresponse"></a>

```json
{
  "AccountAssignmentDeletionStatus": {
    "Status": {},
    "RequestId": {},
    "FailureReason": {},
    "TargetId": {},
    "TargetType": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {},
    "CreatedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountAssignmentDeletionStatus|object|false|none|none|

<h2 id="tocS_DescribeAccountAssignmentDeletionStatusRequest">DescribeAccountAssignmentDeletionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountassignmentdeletionstatusrequest"></a>
<a id="schema_DescribeAccountAssignmentDeletionStatusRequest"></a>
<a id="tocSdescribeaccountassignmentdeletionstatusrequest"></a>
<a id="tocsdescribeaccountassignmentdeletionstatusrequest"></a>

```json
{
  "InstanceArn": {},
  "AccountAssignmentDeletionRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|AccountAssignmentDeletionRequestId|object|true|none|none|

<h2 id="tocS_DescribeInstanceAccessControlAttributeConfigurationResponse">DescribeInstanceAccessControlAttributeConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceaccesscontrolattributeconfigurationresponse"></a>
<a id="schema_DescribeInstanceAccessControlAttributeConfigurationResponse"></a>
<a id="tocSdescribeinstanceaccesscontrolattributeconfigurationresponse"></a>
<a id="tocsdescribeinstanceaccesscontrolattributeconfigurationresponse"></a>

```json
{
  "Status": {},
  "StatusReason": {},
  "InstanceAccessControlAttributeConfiguration": {
    "AccessControlAttributes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|InstanceAccessControlAttributeConfiguration|object|false|none|none|

<h2 id="tocS_DescribeInstanceAccessControlAttributeConfigurationRequest">DescribeInstanceAccessControlAttributeConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceaccesscontrolattributeconfigurationrequest"></a>
<a id="schema_DescribeInstanceAccessControlAttributeConfigurationRequest"></a>
<a id="tocSdescribeinstanceaccesscontrolattributeconfigurationrequest"></a>
<a id="tocsdescribeinstanceaccesscontrolattributeconfigurationrequest"></a>

```json
{
  "InstanceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|

<h2 id="tocS_DescribePermissionSetResponse">DescribePermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepermissionsetresponse"></a>
<a id="schema_DescribePermissionSetResponse"></a>
<a id="tocSdescribepermissionsetresponse"></a>
<a id="tocsdescribepermissionsetresponse"></a>

```json
{
  "PermissionSet": {
    "Name": {},
    "PermissionSetArn": {},
    "Description": {},
    "CreatedDate": {},
    "SessionDuration": {},
    "RelayState": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionSet|object|false|none|none|

<h2 id="tocS_DescribePermissionSetRequest">DescribePermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepermissionsetrequest"></a>
<a id="schema_DescribePermissionSetRequest"></a>
<a id="tocSdescribepermissionsetrequest"></a>
<a id="tocsdescribepermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|

<h2 id="tocS_DescribePermissionSetProvisioningStatusResponse">DescribePermissionSetProvisioningStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepermissionsetprovisioningstatusresponse"></a>
<a id="schema_DescribePermissionSetProvisioningStatusResponse"></a>
<a id="tocSdescribepermissionsetprovisioningstatusresponse"></a>
<a id="tocsdescribepermissionsetprovisioningstatusresponse"></a>

```json
{
  "PermissionSetProvisioningStatus": {
    "Status": {},
    "RequestId": {},
    "AccountId": {},
    "PermissionSetArn": {},
    "FailureReason": {},
    "CreatedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionSetProvisioningStatus|object|false|none|none|

<h2 id="tocS_DescribePermissionSetProvisioningStatusRequest">DescribePermissionSetProvisioningStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepermissionsetprovisioningstatusrequest"></a>
<a id="schema_DescribePermissionSetProvisioningStatusRequest"></a>
<a id="tocSdescribepermissionsetprovisioningstatusrequest"></a>
<a id="tocsdescribepermissionsetprovisioningstatusrequest"></a>

```json
{
  "InstanceArn": {},
  "ProvisionPermissionSetRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|ProvisionPermissionSetRequestId|object|true|none|none|

<h2 id="tocS_DetachCustomerManagedPolicyReferenceFromPermissionSetResponse">DetachCustomerManagedPolicyReferenceFromPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetachcustomermanagedpolicyreferencefrompermissionsetresponse"></a>
<a id="schema_DetachCustomerManagedPolicyReferenceFromPermissionSetResponse"></a>
<a id="tocSdetachcustomermanagedpolicyreferencefrompermissionsetresponse"></a>
<a id="tocsdetachcustomermanagedpolicyreferencefrompermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_DetachCustomerManagedPolicyReferenceFromPermissionSetRequest">DetachCustomerManagedPolicyReferenceFromPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachcustomermanagedpolicyreferencefrompermissionsetrequest"></a>
<a id="schema_DetachCustomerManagedPolicyReferenceFromPermissionSetRequest"></a>
<a id="tocSdetachcustomermanagedpolicyreferencefrompermissionsetrequest"></a>
<a id="tocsdetachcustomermanagedpolicyreferencefrompermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "CustomerManagedPolicyReference": {
    "Name": {},
    "Path": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|CustomerManagedPolicyReference|object|true|none|none|

<h2 id="tocS_DetachManagedPolicyFromPermissionSetResponse">DetachManagedPolicyFromPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetachmanagedpolicyfrompermissionsetresponse"></a>
<a id="schema_DetachManagedPolicyFromPermissionSetResponse"></a>
<a id="tocSdetachmanagedpolicyfrompermissionsetresponse"></a>
<a id="tocsdetachmanagedpolicyfrompermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_DetachManagedPolicyFromPermissionSetRequest">DetachManagedPolicyFromPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachmanagedpolicyfrompermissionsetrequest"></a>
<a id="schema_DetachManagedPolicyFromPermissionSetRequest"></a>
<a id="tocSdetachmanagedpolicyfrompermissionsetrequest"></a>
<a id="tocsdetachmanagedpolicyfrompermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "ManagedPolicyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|ManagedPolicyArn|object|true|none|none|

<h2 id="tocS_GetInlinePolicyForPermissionSetResponse">GetInlinePolicyForPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinlinepolicyforpermissionsetresponse"></a>
<a id="schema_GetInlinePolicyForPermissionSetResponse"></a>
<a id="tocSgetinlinepolicyforpermissionsetresponse"></a>
<a id="tocsgetinlinepolicyforpermissionsetresponse"></a>

```json
{
  "InlinePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InlinePolicy|object|false|none|none|

<h2 id="tocS_GetInlinePolicyForPermissionSetRequest">GetInlinePolicyForPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinlinepolicyforpermissionsetrequest"></a>
<a id="schema_GetInlinePolicyForPermissionSetRequest"></a>
<a id="tocSgetinlinepolicyforpermissionsetrequest"></a>
<a id="tocsgetinlinepolicyforpermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|

<h2 id="tocS_GetPermissionsBoundaryForPermissionSetResponse">GetPermissionsBoundaryForPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissionsboundaryforpermissionsetresponse"></a>
<a id="schema_GetPermissionsBoundaryForPermissionSetResponse"></a>
<a id="tocSgetpermissionsboundaryforpermissionsetresponse"></a>
<a id="tocsgetpermissionsboundaryforpermissionsetresponse"></a>

```json
{
  "PermissionsBoundary": {
    "CustomerManagedPolicyReference": {
      "Name": {},
      "Path": {}
    },
    "ManagedPolicyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionsBoundary|object|false|none|none|

<h2 id="tocS_GetPermissionsBoundaryForPermissionSetRequest">GetPermissionsBoundaryForPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissionsboundaryforpermissionsetrequest"></a>
<a id="schema_GetPermissionsBoundaryForPermissionSetRequest"></a>
<a id="tocSgetpermissionsboundaryforpermissionsetrequest"></a>
<a id="tocsgetpermissionsboundaryforpermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|

<h2 id="tocS_ListAccountAssignmentCreationStatusResponse">ListAccountAssignmentCreationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountassignmentcreationstatusresponse"></a>
<a id="schema_ListAccountAssignmentCreationStatusResponse"></a>
<a id="tocSlistaccountassignmentcreationstatusresponse"></a>
<a id="tocslistaccountassignmentcreationstatusresponse"></a>

```json
{
  "AccountAssignmentsCreationStatus": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountAssignmentsCreationStatus|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccountAssignmentCreationStatusRequest">ListAccountAssignmentCreationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountassignmentcreationstatusrequest"></a>
<a id="schema_ListAccountAssignmentCreationStatusRequest"></a>
<a id="tocSlistaccountassignmentcreationstatusrequest"></a>
<a id="tocslistaccountassignmentcreationstatusrequest"></a>

```json
{
  "InstanceArn": {},
  "MaxResults": {},
  "NextToken": {},
  "Filter": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_ListAccountAssignmentDeletionStatusResponse">ListAccountAssignmentDeletionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountassignmentdeletionstatusresponse"></a>
<a id="schema_ListAccountAssignmentDeletionStatusResponse"></a>
<a id="tocSlistaccountassignmentdeletionstatusresponse"></a>
<a id="tocslistaccountassignmentdeletionstatusresponse"></a>

```json
{
  "AccountAssignmentsDeletionStatus": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountAssignmentsDeletionStatus|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccountAssignmentDeletionStatusRequest">ListAccountAssignmentDeletionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountassignmentdeletionstatusrequest"></a>
<a id="schema_ListAccountAssignmentDeletionStatusRequest"></a>
<a id="tocSlistaccountassignmentdeletionstatusrequest"></a>
<a id="tocslistaccountassignmentdeletionstatusrequest"></a>

```json
{
  "InstanceArn": {},
  "MaxResults": {},
  "NextToken": {},
  "Filter": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_ListAccountAssignmentsResponse">ListAccountAssignmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountassignmentsresponse"></a>
<a id="schema_ListAccountAssignmentsResponse"></a>
<a id="tocSlistaccountassignmentsresponse"></a>
<a id="tocslistaccountassignmentsresponse"></a>

```json
{
  "AccountAssignments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountAssignments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccountAssignmentsRequest">ListAccountAssignmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountassignmentsrequest"></a>
<a id="schema_ListAccountAssignmentsRequest"></a>
<a id="tocSlistaccountassignmentsrequest"></a>
<a id="tocslistaccountassignmentsrequest"></a>

```json
{
  "InstanceArn": {},
  "AccountId": {},
  "PermissionSetArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|AccountId|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccountsForProvisionedPermissionSetResponse">ListAccountsForProvisionedPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsforprovisionedpermissionsetresponse"></a>
<a id="schema_ListAccountsForProvisionedPermissionSetResponse"></a>
<a id="tocSlistaccountsforprovisionedpermissionsetresponse"></a>
<a id="tocslistaccountsforprovisionedpermissionsetresponse"></a>

```json
{
  "AccountIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccountsForProvisionedPermissionSetRequest">ListAccountsForProvisionedPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsforprovisionedpermissionsetrequest"></a>
<a id="schema_ListAccountsForProvisionedPermissionSetRequest"></a>
<a id="tocSlistaccountsforprovisionedpermissionsetrequest"></a>
<a id="tocslistaccountsforprovisionedpermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "ProvisioningStatus": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|ProvisioningStatus|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomerManagedPolicyReferencesInPermissionSetResponse">ListCustomerManagedPolicyReferencesInPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomermanagedpolicyreferencesinpermissionsetresponse"></a>
<a id="schema_ListCustomerManagedPolicyReferencesInPermissionSetResponse"></a>
<a id="tocSlistcustomermanagedpolicyreferencesinpermissionsetresponse"></a>
<a id="tocslistcustomermanagedpolicyreferencesinpermissionsetresponse"></a>

```json
{
  "CustomerManagedPolicyReferences": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerManagedPolicyReferences|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCustomerManagedPolicyReferencesInPermissionSetRequest">ListCustomerManagedPolicyReferencesInPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomermanagedpolicyreferencesinpermissionsetrequest"></a>
<a id="schema_ListCustomerManagedPolicyReferencesInPermissionSetRequest"></a>
<a id="tocSlistcustomermanagedpolicyreferencesinpermissionsetrequest"></a>
<a id="tocslistcustomermanagedpolicyreferencesinpermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "Instances": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInstancesRequest">ListInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesrequest"></a>
<a id="schema_ListInstancesRequest"></a>
<a id="tocSlistinstancesrequest"></a>
<a id="tocslistinstancesrequest"></a>

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

<h2 id="tocS_ListManagedPoliciesInPermissionSetResponse">ListManagedPoliciesInPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedpoliciesinpermissionsetresponse"></a>
<a id="schema_ListManagedPoliciesInPermissionSetResponse"></a>
<a id="tocSlistmanagedpoliciesinpermissionsetresponse"></a>
<a id="tocslistmanagedpoliciesinpermissionsetresponse"></a>

```json
{
  "AttachedManagedPolicies": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachedManagedPolicies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListManagedPoliciesInPermissionSetRequest">ListManagedPoliciesInPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedpoliciesinpermissionsetrequest"></a>
<a id="schema_ListManagedPoliciesInPermissionSetRequest"></a>
<a id="tocSlistmanagedpoliciesinpermissionsetrequest"></a>
<a id="tocslistmanagedpoliciesinpermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPermissionSetProvisioningStatusResponse">ListPermissionSetProvisioningStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsetprovisioningstatusresponse"></a>
<a id="schema_ListPermissionSetProvisioningStatusResponse"></a>
<a id="tocSlistpermissionsetprovisioningstatusresponse"></a>
<a id="tocslistpermissionsetprovisioningstatusresponse"></a>

```json
{
  "PermissionSetsProvisioningStatus": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionSetsProvisioningStatus|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPermissionSetProvisioningStatusRequest">ListPermissionSetProvisioningStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsetprovisioningstatusrequest"></a>
<a id="schema_ListPermissionSetProvisioningStatusRequest"></a>
<a id="tocSlistpermissionsetprovisioningstatusrequest"></a>
<a id="tocslistpermissionsetprovisioningstatusrequest"></a>

```json
{
  "InstanceArn": {},
  "MaxResults": {},
  "NextToken": {},
  "Filter": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_ListPermissionSetsResponse">ListPermissionSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsetsresponse"></a>
<a id="schema_ListPermissionSetsResponse"></a>
<a id="tocSlistpermissionsetsresponse"></a>
<a id="tocslistpermissionsetsresponse"></a>

```json
{
  "PermissionSets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionSets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPermissionSetsRequest">ListPermissionSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsetsrequest"></a>
<a id="schema_ListPermissionSetsRequest"></a>
<a id="tocSlistpermissionsetsrequest"></a>
<a id="tocslistpermissionsetsrequest"></a>

```json
{
  "InstanceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListPermissionSetsProvisionedToAccountResponse">ListPermissionSetsProvisionedToAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsetsprovisionedtoaccountresponse"></a>
<a id="schema_ListPermissionSetsProvisionedToAccountResponse"></a>
<a id="tocSlistpermissionsetsprovisionedtoaccountresponse"></a>
<a id="tocslistpermissionsetsprovisionedtoaccountresponse"></a>

```json
{
  "NextToken": {},
  "PermissionSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|PermissionSets|object|false|none|none|

<h2 id="tocS_ListPermissionSetsProvisionedToAccountRequest">ListPermissionSetsProvisionedToAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissionsetsprovisionedtoaccountrequest"></a>
<a id="schema_ListPermissionSetsProvisionedToAccountRequest"></a>
<a id="tocSlistpermissionsetsprovisionedtoaccountrequest"></a>
<a id="tocslistpermissionsetsprovisionedtoaccountrequest"></a>

```json
{
  "InstanceArn": {},
  "AccountId": {},
  "ProvisioningStatus": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|AccountId|object|true|none|none|
|ProvisioningStatus|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

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
  "InstanceArn": {},
  "ResourceArn": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|ResourceArn|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ProvisionPermissionSetResponse">ProvisionPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionpermissionsetresponse"></a>
<a id="schema_ProvisionPermissionSetResponse"></a>
<a id="tocSprovisionpermissionsetresponse"></a>
<a id="tocsprovisionpermissionsetresponse"></a>

```json
{
  "PermissionSetProvisioningStatus": {
    "Status": {},
    "RequestId": {},
    "AccountId": {},
    "PermissionSetArn": {},
    "FailureReason": {},
    "CreatedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionSetProvisioningStatus|object|false|none|none|

<h2 id="tocS_ProvisionPermissionSetRequest">ProvisionPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionpermissionsetrequest"></a>
<a id="schema_ProvisionPermissionSetRequest"></a>
<a id="tocSprovisionpermissionsetrequest"></a>
<a id="tocsprovisionpermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "TargetId": {},
  "TargetType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|TargetId|object|false|none|none|
|TargetType|object|true|none|none|

<h2 id="tocS_PutInlinePolicyToPermissionSetResponse">PutInlinePolicyToPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputinlinepolicytopermissionsetresponse"></a>
<a id="schema_PutInlinePolicyToPermissionSetResponse"></a>
<a id="tocSputinlinepolicytopermissionsetresponse"></a>
<a id="tocsputinlinepolicytopermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_PutInlinePolicyToPermissionSetRequest">PutInlinePolicyToPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputinlinepolicytopermissionsetrequest"></a>
<a id="schema_PutInlinePolicyToPermissionSetRequest"></a>
<a id="tocSputinlinepolicytopermissionsetrequest"></a>
<a id="tocsputinlinepolicytopermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "InlinePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|InlinePolicy|object|true|none|none|

<h2 id="tocS_PutPermissionsBoundaryToPermissionSetResponse">PutPermissionsBoundaryToPermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionsboundarytopermissionsetresponse"></a>
<a id="schema_PutPermissionsBoundaryToPermissionSetResponse"></a>
<a id="tocSputpermissionsboundarytopermissionsetresponse"></a>
<a id="tocsputpermissionsboundarytopermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_PutPermissionsBoundaryToPermissionSetRequest">PutPermissionsBoundaryToPermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionsboundarytopermissionsetrequest"></a>
<a id="schema_PutPermissionsBoundaryToPermissionSetRequest"></a>
<a id="tocSputpermissionsboundarytopermissionsetrequest"></a>
<a id="tocsputpermissionsboundarytopermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "PermissionsBoundary": {
    "CustomerManagedPolicyReference": {
      "Name": {},
      "Path": {}
    },
    "ManagedPolicyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|PermissionsBoundary|object|true|none|none|

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
  "InstanceArn": {},
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
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
  "InstanceArn": {},
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateInstanceAccessControlAttributeConfigurationResponse">UpdateInstanceAccessControlAttributeConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstanceaccesscontrolattributeconfigurationresponse"></a>
<a id="schema_UpdateInstanceAccessControlAttributeConfigurationResponse"></a>
<a id="tocSupdateinstanceaccesscontrolattributeconfigurationresponse"></a>
<a id="tocsupdateinstanceaccesscontrolattributeconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateInstanceAccessControlAttributeConfigurationRequest">UpdateInstanceAccessControlAttributeConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstanceaccesscontrolattributeconfigurationrequest"></a>
<a id="schema_UpdateInstanceAccessControlAttributeConfigurationRequest"></a>
<a id="tocSupdateinstanceaccesscontrolattributeconfigurationrequest"></a>
<a id="tocsupdateinstanceaccesscontrolattributeconfigurationrequest"></a>

```json
{
  "InstanceArn": {},
  "InstanceAccessControlAttributeConfiguration": {
    "AccessControlAttributes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|InstanceAccessControlAttributeConfiguration|object|true|none|none|

<h2 id="tocS_UpdatePermissionSetResponse">UpdatePermissionSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepermissionsetresponse"></a>
<a id="schema_UpdatePermissionSetResponse"></a>
<a id="tocSupdatepermissionsetresponse"></a>
<a id="tocsupdatepermissionsetresponse"></a>

```json
{}
```

<h2 id="tocS_UpdatePermissionSetRequest">UpdatePermissionSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepermissionsetrequest"></a>
<a id="schema_UpdatePermissionSetRequest"></a>
<a id="tocSupdatepermissionsetrequest"></a>
<a id="tocsupdatepermissionsetrequest"></a>

```json
{
  "InstanceArn": {},
  "PermissionSetArn": {},
  "Description": {},
  "SessionDuration": {},
  "RelayState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|true|none|none|
|PermissionSetArn|object|true|none|none|
|Description|object|false|none|none|
|SessionDuration|object|false|none|none|
|RelayState|object|false|none|none|

<h2 id="tocS_AccessControlAttributeKey">AccessControlAttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolattributekey"></a>
<a id="schema_AccessControlAttributeKey"></a>
<a id="tocSaccesscontrolattributekey"></a>
<a id="tocsaccesscontrolattributekey"></a>

```json
"string"
```

<h2 id="tocS_AccessControlAttributeValue">AccessControlAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolattributevalue"></a>
<a id="schema_AccessControlAttributeValue"></a>
<a id="tocSaccesscontrolattributevalue"></a>
<a id="tocsaccesscontrolattributevalue"></a>

```json
{
  "Source": {}
}
```

The value used for mapping a specified attribute to an identity source. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/attributemappingsconcept.html">Attribute mappings</a> in the <i>IAM Identity Center User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|true|none|none|

<h2 id="tocS_AccessControlAttribute">AccessControlAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolattribute"></a>
<a id="schema_AccessControlAttribute"></a>
<a id="tocSaccesscontrolattribute"></a>
<a id="tocsaccesscontrolattribute"></a>

```json
{
  "Key": {},
  "Value": {
    "Source": {}
  }
}
```

These are IAM Identity Center identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your AWS resources based upon the configured attribute values. When you enable ABAC and specify <code>AccessControlAttributes</code>, IAM Identity Center passes the attribute values of the authenticated user into IAM for use in policy evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_AccessControlAttributeList">AccessControlAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolattributelist"></a>
<a id="schema_AccessControlAttributeList"></a>
<a id="tocSaccesscontrolattributelist"></a>
<a id="tocsaccesscontrolattributelist"></a>

```json
[
  {
    "Key": {},
    "Value": {
      "Source": {}
    }
  }
]
```

<h2 id="tocS_AccessControlAttributeValueSourceList">AccessControlAttributeValueSourceList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolattributevaluesourcelist"></a>
<a id="schema_AccessControlAttributeValueSourceList"></a>
<a id="tocSaccesscontrolattributevaluesourcelist"></a>
<a id="tocsaccesscontrolattributevaluesourcelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AccessControlAttributeValueSource">AccessControlAttributeValueSource</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolattributevaluesource"></a>
<a id="schema_AccessControlAttributeValueSource"></a>
<a id="tocSaccesscontrolattributevaluesource"></a>
<a id="tocsaccesscontrolattributevaluesource"></a>

```json
"string"
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_PermissionSetArn">PermissionSetArn</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetarn"></a>
<a id="schema_PermissionSetArn"></a>
<a id="tocSpermissionsetarn"></a>
<a id="tocspermissionsetarn"></a>

```json
"stringstri"
```

<h2 id="tocS_PrincipalType">PrincipalType</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltype"></a>
<a id="schema_PrincipalType"></a>
<a id="tocSprincipaltype"></a>
<a id="tocsprincipaltype"></a>

```json
"USER"
```

<h2 id="tocS_PrincipalId">PrincipalId</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalid"></a>
<a id="schema_PrincipalId"></a>
<a id="tocSprincipalid"></a>
<a id="tocsprincipalid"></a>

```json
"string"
```

<h2 id="tocS_AccountAssignment">AccountAssignment</h2>
<!-- backwards compatibility -->
<a id="schemaaccountassignment"></a>
<a id="schema_AccountAssignment"></a>
<a id="tocSaccountassignment"></a>
<a id="tocsaccountassignment"></a>

```json
{
  "AccountId": {},
  "PermissionSetArn": {},
  "PrincipalType": {},
  "PrincipalId": {}
}
```

<p>The assignment that indicates a principal's limited access to a specified AWS account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|PermissionSetArn|object|false|none|none|
|PrincipalType|object|false|none|none|
|PrincipalId|object|false|none|none|

<h2 id="tocS_AccountAssignmentList">AccountAssignmentList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountassignmentlist"></a>
<a id="schema_AccountAssignmentList"></a>
<a id="tocSaccountassignmentlist"></a>
<a id="tocsaccountassignmentlist"></a>

```json
[
  {
    "AccountId": {},
    "PermissionSetArn": {},
    "PrincipalType": {},
    "PrincipalId": {}
  }
]
```

<h2 id="tocS_StatusValues">StatusValues</h2>
<!-- backwards compatibility -->
<a id="schemastatusvalues"></a>
<a id="schema_StatusValues"></a>
<a id="tocSstatusvalues"></a>
<a id="tocsstatusvalues"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_UUId">UUId</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUId"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_Reason">Reason</h2>
<!-- backwards compatibility -->
<a id="schemareason"></a>
<a id="schema_Reason"></a>
<a id="tocSreason"></a>
<a id="tocsreason"></a>

```json
"string"
```

<h2 id="tocS_TargetId">TargetId</h2>
<!-- backwards compatibility -->
<a id="schematargetid"></a>
<a id="schema_TargetId"></a>
<a id="tocStargetid"></a>
<a id="tocstargetid"></a>

```json
"stringstring"
```

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"AWS_ACCOUNT"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AccountAssignmentOperationStatus">AccountAssignmentOperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountassignmentoperationstatus"></a>
<a id="schema_AccountAssignmentOperationStatus"></a>
<a id="tocSaccountassignmentoperationstatus"></a>
<a id="tocsaccountassignmentoperationstatus"></a>

```json
{
  "Status": {},
  "RequestId": {},
  "FailureReason": {},
  "TargetId": {},
  "TargetType": {},
  "PermissionSetArn": {},
  "PrincipalType": {},
  "PrincipalId": {},
  "CreatedDate": {}
}
```

The status of the creation or deletion operation of an assignment that a principal needs to access an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|RequestId|object|false|none|none|
|FailureReason|object|false|none|none|
|TargetId|object|false|none|none|
|TargetType|object|false|none|none|
|PermissionSetArn|object|false|none|none|
|PrincipalType|object|false|none|none|
|PrincipalId|object|false|none|none|
|CreatedDate|object|false|none|none|

<h2 id="tocS_AccountAssignmentOperationStatusMetadata">AccountAssignmentOperationStatusMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaaccountassignmentoperationstatusmetadata"></a>
<a id="schema_AccountAssignmentOperationStatusMetadata"></a>
<a id="tocSaccountassignmentoperationstatusmetadata"></a>
<a id="tocsaccountassignmentoperationstatusmetadata"></a>

```json
{
  "Status": {},
  "RequestId": {},
  "CreatedDate": {}
}
```

Provides information about the <a>AccountAssignment</a> creation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|RequestId|object|false|none|none|
|CreatedDate|object|false|none|none|

<h2 id="tocS_AccountAssignmentOperationStatusList">AccountAssignmentOperationStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountassignmentoperationstatuslist"></a>
<a id="schema_AccountAssignmentOperationStatusList"></a>
<a id="tocSaccountassignmentoperationstatuslist"></a>
<a id="tocsaccountassignmentoperationstatuslist"></a>

```json
[
  {
    "Status": {},
    "RequestId": {},
    "CreatedDate": {}
  }
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
  "stringstring"
]
```

<h2 id="tocS_InstanceArn">InstanceArn</h2>
<!-- backwards compatibility -->
<a id="schemainstancearn"></a>
<a id="schema_InstanceArn"></a>
<a id="tocSinstancearn"></a>
<a id="tocsinstancearn"></a>

```json
"stringstri"
```

<h2 id="tocS_CustomerManagedPolicyReference">CustomerManagedPolicyReference</h2>
<!-- backwards compatibility -->
<a id="schemacustomermanagedpolicyreference"></a>
<a id="schema_CustomerManagedPolicyReference"></a>
<a id="tocScustomermanagedpolicyreference"></a>
<a id="tocscustomermanagedpolicyreference"></a>

```json
{
  "Name": {},
  "Path": {}
}
```

Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Path|object|false|none|none|

<h2 id="tocS_ManagedPolicyArn">ManagedPolicyArn</h2>
<!-- backwards compatibility -->
<a id="schemamanagedpolicyarn"></a>
<a id="schema_ManagedPolicyArn"></a>
<a id="tocSmanagedpolicyarn"></a>
<a id="tocsmanagedpolicyarn"></a>

```json
"stringstringstringst"
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

<h2 id="tocS_AttachedManagedPolicy">AttachedManagedPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaattachedmanagedpolicy"></a>
<a id="schema_AttachedManagedPolicy"></a>
<a id="tocSattachedmanagedpolicy"></a>
<a id="tocsattachedmanagedpolicy"></a>

```json
{
  "Name": {},
  "Arn": {}
}
```

A structure that stores the details of the AWS managed policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_AttachedManagedPolicyList">AttachedManagedPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaattachedmanagedpolicylist"></a>
<a id="schema_AttachedManagedPolicyList"></a>
<a id="tocSattachedmanagedpolicylist"></a>
<a id="tocsattachedmanagedpolicylist"></a>

```json
[
  {
    "Name": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_InstanceAccessControlAttributeConfiguration">InstanceAccessControlAttributeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainstanceaccesscontrolattributeconfiguration"></a>
<a id="schema_InstanceAccessControlAttributeConfiguration"></a>
<a id="tocSinstanceaccesscontrolattributeconfiguration"></a>
<a id="tocsinstanceaccesscontrolattributeconfiguration"></a>

```json
{
  "AccessControlAttributes": {}
}
```

Specifies the attributes to add to your attribute-based access control (ABAC) configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessControlAttributes|object|true|none|none|

<h2 id="tocS_PermissionSetName">PermissionSetName</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetname"></a>
<a id="schema_PermissionSetName"></a>
<a id="tocSpermissionsetname"></a>
<a id="tocspermissionsetname"></a>

```json
"string"
```

<h2 id="tocS_PermissionSetDescription">PermissionSetDescription</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetdescription"></a>
<a id="schema_PermissionSetDescription"></a>
<a id="tocSpermissionsetdescription"></a>
<a id="tocspermissionsetdescription"></a>

```json
"string"
```

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
"string"
```

<h2 id="tocS_RelayState">RelayState</h2>
<!-- backwards compatibility -->
<a id="schemarelaystate"></a>
<a id="schema_RelayState"></a>
<a id="tocSrelaystate"></a>
<a id="tocsrelaystate"></a>

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

<h2 id="tocS_PermissionSet">PermissionSet</h2>
<!-- backwards compatibility -->
<a id="schemapermissionset"></a>
<a id="schema_PermissionSet"></a>
<a id="tocSpermissionset"></a>
<a id="tocspermissionset"></a>

```json
{
  "Name": {},
  "PermissionSetArn": {},
  "Description": {},
  "CreatedDate": {},
  "SessionDuration": {},
  "RelayState": {}
}
```

An entity that contains IAM policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|PermissionSetArn|object|false|none|none|
|Description|object|false|none|none|
|CreatedDate|object|false|none|none|
|SessionDuration|object|false|none|none|
|RelayState|object|false|none|none|

<h2 id="tocS_ManagedPolicyName">ManagedPolicyName</h2>
<!-- backwards compatibility -->
<a id="schemamanagedpolicyname"></a>
<a id="schema_ManagedPolicyName"></a>
<a id="tocSmanagedpolicyname"></a>
<a id="tocsmanagedpolicyname"></a>

```json
"string"
```

<h2 id="tocS_ManagedPolicyPath">ManagedPolicyPath</h2>
<!-- backwards compatibility -->
<a id="schemamanagedpolicypath"></a>
<a id="schema_ManagedPolicyPath"></a>
<a id="tocSmanagedpolicypath"></a>
<a id="tocsmanagedpolicypath"></a>

```json
"string"
```

<h2 id="tocS_CustomerManagedPolicyReferenceList">CustomerManagedPolicyReferenceList</h2>
<!-- backwards compatibility -->
<a id="schemacustomermanagedpolicyreferencelist"></a>
<a id="schema_CustomerManagedPolicyReferenceList"></a>
<a id="tocScustomermanagedpolicyreferencelist"></a>
<a id="tocscustomermanagedpolicyreferencelist"></a>

```json
[
  {
    "Name": {},
    "Path": {}
  }
]
```

<h2 id="tocS_InstanceAccessControlAttributeConfigurationStatus">InstanceAccessControlAttributeConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstanceaccesscontrolattributeconfigurationstatus"></a>
<a id="schema_InstanceAccessControlAttributeConfigurationStatus"></a>
<a id="tocSinstanceaccesscontrolattributeconfigurationstatus"></a>
<a id="tocsinstanceaccesscontrolattributeconfigurationstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_InstanceAccessControlAttributeConfigurationStatusReason">InstanceAccessControlAttributeConfigurationStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemainstanceaccesscontrolattributeconfigurationstatusreason"></a>
<a id="schema_InstanceAccessControlAttributeConfigurationStatusReason"></a>
<a id="tocSinstanceaccesscontrolattributeconfigurationstatusreason"></a>
<a id="tocsinstanceaccesscontrolattributeconfigurationstatusreason"></a>

```json
"string"
```

<h2 id="tocS_PermissionSetProvisioningStatus">PermissionSetProvisioningStatus</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetprovisioningstatus"></a>
<a id="schema_PermissionSetProvisioningStatus"></a>
<a id="tocSpermissionsetprovisioningstatus"></a>
<a id="tocspermissionsetprovisioningstatus"></a>

```json
{
  "Status": {},
  "RequestId": {},
  "AccountId": {},
  "PermissionSetArn": {},
  "FailureReason": {},
  "CreatedDate": {}
}
```

A structure that is used to provide the status of the provisioning operation for a specified permission set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|RequestId|object|false|none|none|
|AccountId|object|false|none|none|
|PermissionSetArn|object|false|none|none|
|FailureReason|object|false|none|none|
|CreatedDate|object|false|none|none|

<h2 id="tocS_PermissionSetPolicyDocument">PermissionSetPolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetpolicydocument"></a>
<a id="schema_PermissionSetPolicyDocument"></a>
<a id="tocSpermissionsetpolicydocument"></a>
<a id="tocspermissionsetpolicydocument"></a>

```json
"string"
```

<h2 id="tocS_PermissionsBoundary">PermissionsBoundary</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsboundary"></a>
<a id="schema_PermissionsBoundary"></a>
<a id="tocSpermissionsboundary"></a>
<a id="tocspermissionsboundary"></a>

```json
{
  "CustomerManagedPolicyReference": {
    "Name": {},
    "Path": {}
  },
  "ManagedPolicyArn": {}
}
```

<p>Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. Specify either <code>CustomerManagedPolicyReference</code> to use the name and path of a customer managed policy, or <code>ManagedPolicyArn</code> to use the ARN of an AWS managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>Policies used as permissions boundaries don't provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the <i>IAM User Guide</i>.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerManagedPolicyReference|object|false|none|none|
|ManagedPolicyArn|object|false|none|none|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_InstanceMetadata">InstanceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetadata"></a>
<a id="schema_InstanceMetadata"></a>
<a id="tocSinstancemetadata"></a>
<a id="tocsinstancemetadata"></a>

```json
{
  "InstanceArn": {},
  "IdentityStoreId": {}
}
```

Provides information about the IAM Identity Center instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceArn|object|false|none|none|
|IdentityStoreId|object|false|none|none|

<h2 id="tocS_InstanceList">InstanceList</h2>
<!-- backwards compatibility -->
<a id="schemainstancelist"></a>
<a id="schema_InstanceList"></a>
<a id="tocSinstancelist"></a>
<a id="tocsinstancelist"></a>

```json
[
  {
    "InstanceArn": {},
    "IdentityStoreId": {}
  }
]
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

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_OperationStatusFilter">OperationStatusFilter</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatusfilter"></a>
<a id="schema_OperationStatusFilter"></a>
<a id="tocSoperationstatusfilter"></a>
<a id="tocsoperationstatusfilter"></a>

```json
{
  "Status": {}
}
```

Filters he operation status list based on the passed attribute value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_ProvisioningStatus">ProvisioningStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningstatus"></a>
<a id="schema_ProvisioningStatus"></a>
<a id="tocSprovisioningstatus"></a>
<a id="tocsprovisioningstatus"></a>

```json
"LATEST_PERMISSION_SET_PROVISIONED"
```

<h2 id="tocS_PermissionSetProvisioningStatusList">PermissionSetProvisioningStatusList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetprovisioningstatuslist"></a>
<a id="schema_PermissionSetProvisioningStatusList"></a>
<a id="tocSpermissionsetprovisioningstatuslist"></a>
<a id="tocspermissionsetprovisioningstatuslist"></a>

```json
[
  {
    "Status": {},
    "RequestId": {},
    "CreatedDate": {}
  }
]
```

<h2 id="tocS_PermissionSetList">PermissionSetList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetlist"></a>
<a id="schema_PermissionSetList"></a>
<a id="tocSpermissionsetlist"></a>
<a id="tocspermissionsetlist"></a>

```json
[
  "stringstri"
]
```

<h2 id="tocS_TaggableResourceArn">TaggableResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemataggableresourcearn"></a>
<a id="schema_TaggableResourceArn"></a>
<a id="tocStaggableresourcearn"></a>
<a id="tocstaggableresourcearn"></a>

```json
"stringstri"
```

<h2 id="tocS_PermissionSetProvisioningStatusMetadata">PermissionSetProvisioningStatusMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsetprovisioningstatusmetadata"></a>
<a id="schema_PermissionSetProvisioningStatusMetadata"></a>
<a id="tocSpermissionsetprovisioningstatusmetadata"></a>
<a id="tocspermissionsetprovisioningstatusmetadata"></a>

```json
{
  "Status": {},
  "RequestId": {},
  "CreatedDate": {}
}
```

Provides information about the permission set provisioning status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|RequestId|object|false|none|none|
|CreatedDate|object|false|none|none|

<h2 id="tocS_ProvisionTargetType">ProvisionTargetType</h2>
<!-- backwards compatibility -->
<a id="schemaprovisiontargettype"></a>
<a id="schema_ProvisionTargetType"></a>
<a id="tocSprovisiontargettype"></a>
<a id="tocsprovisiontargettype"></a>

```json
"AWS_ACCOUNT"
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

A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center creates in AWS accounts.

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
