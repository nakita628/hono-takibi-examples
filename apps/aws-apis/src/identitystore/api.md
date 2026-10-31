<h1 id="aws-sso-identity-store">AWS SSO Identity Store v2020-06-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The Identity Store service used by AWS IAM Identity Center (successor to AWS Single Sign-On) provides a single place to retrieve all of your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <pre><code> &lt;note&gt; &lt;p&gt;Although AWS Single Sign-On was renamed, the &lt;code&gt;sso&lt;/code&gt; and &lt;code&gt;identitystore&lt;/code&gt; API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed&quot;&gt;IAM Identity Center rename&lt;/a&gt;.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;This reference guide describes the identity store operations that you can call programatically and includes detailed information about data types and errors.&lt;/p&gt; </code></pre>

Base URLs:

* <a href="http://identitystore.us-east-1.amazonaws.com">http://identitystore.us-east-1.amazonaws.com</a> - The IdentityStore multi-region endpoint

* <a href="https://identitystore.us-east-1.amazonaws.com">https://identitystore.us-east-1.amazonaws.com</a> - The IdentityStore multi-region endpoint

* <a href="http://identitystore.cn-north-1.amazonaws.com.cn">http://identitystore.cn-north-1.amazonaws.com.cn</a> - The IdentityStore endpoint for China (Beijing) and China (Ningxia)

* <a href="https://identitystore.cn-north-1.amazonaws.com.cn">https://identitystore.cn-north-1.amazonaws.com.cn</a> - The IdentityStore endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/identitystore/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-sso-identity-store-default">Default</h1>

## CreateGroup

<a id="opIdCreateGroup"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.CreateGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.CreateGroup' \
  -d '{
    "IdentityStoreId": {},
    "DisplayName": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.CreateGroup`

Creates a group within the specified identity store.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "DisplayName": {},
  "Description": {}
}
```

<h3 id="creategroup-parameters">Parameters</h3>

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
|body|body|[CreateGroupRequest](#schemacreategrouprequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» DisplayName|body|object|false|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.CreateGroup|

> Example responses

> 200 Response

```json
{
  "GroupId": {},
  "IdentityStoreId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="creategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupResponse](#schemacreategroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGroupMembership

<a id="opIdCreateGroupMembership"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.CreateGroupMembership' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.CreateGroupMembership' \
  -d '{
    "IdentityStoreId": {},
    "GroupId": {},
    "MemberId": {
      "UserId": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.CreateGroupMembership`

Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "GroupId": {},
  "MemberId": {
    "UserId": {}
  }
}
```

<h3 id="creategroupmembership-parameters">Parameters</h3>

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
|body|body|[CreateGroupMembershipRequest](#schemacreategroupmembershiprequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» GroupId|body|object|true|none|
|» MemberId|body|object|true|none|
|» » UserId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.CreateGroupMembership|

> Example responses

> 200 Response

```json
{
  "MembershipId": {},
  "IdentityStoreId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="creategroupmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGroupMembershipResponse](#schemacreategroupmembershipresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.CreateUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.CreateUser' \
  -d '{
    "IdentityStoreId": {},
    "UserName": {},
    "Name": {
      "Formatted": {},
      "FamilyName": {},
      "GivenName": {},
      "MiddleName": {},
      "HonorificPrefix": {},
      "HonorificSuffix": {}
    },
    "DisplayName": {},
    "NickName": {},
    "ProfileUrl": {},
    "Emails": {},
    "Addresses": {},
    "PhoneNumbers": {},
    "UserType": {},
    "Title": {},
    "PreferredLanguage": {},
    "Locale": {},
    "Timezone": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.CreateUser`

Creates a user within the specified identity store.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "UserName": {},
  "Name": {
    "Formatted": {},
    "FamilyName": {},
    "GivenName": {},
    "MiddleName": {},
    "HonorificPrefix": {},
    "HonorificSuffix": {}
  },
  "DisplayName": {},
  "NickName": {},
  "ProfileUrl": {},
  "Emails": {},
  "Addresses": {},
  "PhoneNumbers": {},
  "UserType": {},
  "Title": {},
  "PreferredLanguage": {},
  "Locale": {},
  "Timezone": {}
}
```

<h3 id="createuser-parameters">Parameters</h3>

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
|body|body|[CreateUserRequest](#schemacreateuserrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» UserName|body|object|false|none|
|» Name|body|object|false|none|
|» » Formatted|body|object|false|none|
|» » FamilyName|body|object|false|none|
|» » GivenName|body|object|false|none|
|» » MiddleName|body|object|false|none|
|» » HonorificPrefix|body|object|false|none|
|» » HonorificSuffix|body|object|false|none|
|» DisplayName|body|object|false|none|
|» NickName|body|object|false|none|
|» ProfileUrl|body|object|false|none|
|» Emails|body|object|false|none|
|» Addresses|body|object|false|none|
|» PhoneNumbers|body|object|false|none|
|» UserType|body|object|false|none|
|» Title|body|object|false|none|
|» PreferredLanguage|body|object|false|none|
|» Locale|body|object|false|none|
|» Timezone|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.CreateUser|

> Example responses

> 200 Response

```json
{
  "UserId": {},
  "IdentityStoreId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGroup

<a id="opIdDeleteGroup"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.DeleteGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.DeleteGroup' \
  -d '{
    "IdentityStoreId": {},
    "GroupId": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.DeleteGroup`

Delete a group within an identity store given <code>GroupId</code>.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "GroupId": {}
}
```

<h3 id="deletegroup-parameters">Parameters</h3>

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
|body|body|[DeleteGroupRequest](#schemadeletegrouprequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» GroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.DeleteGroup|

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

<h3 id="deletegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGroupResponse](#schemadeletegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGroupMembership

<a id="opIdDeleteGroupMembership"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.DeleteGroupMembership' \
  -d '{
    "IdentityStoreId": {},
    "MembershipId": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership`

Delete a membership within a group given <code>MembershipId</code>.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "MembershipId": {}
}
```

<h3 id="deletegroupmembership-parameters">Parameters</h3>

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
|body|body|[DeleteGroupMembershipRequest](#schemadeletegroupmembershiprequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» MembershipId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.DeleteGroupMembership|

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

<h3 id="deletegroupmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGroupMembershipResponse](#schemadeletegroupmembershipresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.DeleteUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.DeleteUser' \
  -d '{
    "IdentityStoreId": {},
    "UserId": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.DeleteUser`

Deletes a user within an identity store given <code>UserId</code>.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "UserId": {}
}
```

<h3 id="deleteuser-parameters">Parameters</h3>

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
|body|body|[DeleteUserRequest](#schemadeleteuserrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» UserId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.DeleteUser|

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

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUserResponse](#schemadeleteuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGroup

<a id="opIdDescribeGroup"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.DescribeGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.DescribeGroup' \
  -d '{
    "IdentityStoreId": {},
    "GroupId": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.DescribeGroup`

Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "GroupId": {}
}
```

<h3 id="describegroup-parameters">Parameters</h3>

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
|body|body|[DescribeGroupRequest](#schemadescribegrouprequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» GroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.DescribeGroup|

> Example responses

> 200 Response

```json
{
  "GroupId": {},
  "DisplayName": {},
  "ExternalIds": {},
  "Description": {},
  "IdentityStoreId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGroupResponse](#schemadescribegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGroupMembership

<a id="opIdDescribeGroupMembership"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.DescribeGroupMembership' \
  -d '{
    "IdentityStoreId": {},
    "MembershipId": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership`

Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "MembershipId": {}
}
```

<h3 id="describegroupmembership-parameters">Parameters</h3>

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
|body|body|[DescribeGroupMembershipRequest](#schemadescribegroupmembershiprequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» MembershipId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.DescribeGroupMembership|

> Example responses

> 200 Response

```json
{
  "IdentityStoreId": {},
  "MembershipId": {},
  "GroupId": {},
  "MemberId": {
    "UserId": {}
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

<h3 id="describegroupmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGroupMembershipResponse](#schemadescribegroupmembershipresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUser

<a id="opIdDescribeUser"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.DescribeUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.DescribeUser' \
  -d '{
    "IdentityStoreId": {},
    "UserId": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.DescribeUser`

Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "UserId": {}
}
```

<h3 id="describeuser-parameters">Parameters</h3>

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
|body|body|[DescribeUserRequest](#schemadescribeuserrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» UserId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.DescribeUser|

> Example responses

> 200 Response

```json
{
  "UserName": {},
  "UserId": {},
  "ExternalIds": {},
  "Name": {
    "Formatted": {},
    "FamilyName": {},
    "GivenName": {},
    "MiddleName": {},
    "HonorificPrefix": {},
    "HonorificSuffix": {}
  },
  "DisplayName": {},
  "NickName": {},
  "ProfileUrl": {},
  "Emails": {},
  "Addresses": {},
  "PhoneNumbers": {},
  "UserType": {},
  "Title": {},
  "PreferredLanguage": {},
  "Locale": {},
  "Timezone": {},
  "IdentityStoreId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describeuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserResponse](#schemadescribeuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroupId

<a id="opIdGetGroupId"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.GetGroupId' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.GetGroupId' \
  -d '{
    "IdentityStoreId": {},
    "AlternateIdentifier": {
      "ExternalId": {
        "Issuer": {},
        "Id": {}
      },
      "UniqueAttribute": {
        "AttributePath": {},
        "AttributeValue": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.GetGroupId`

Retrieves <code>GroupId</code> in an identity store.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "AlternateIdentifier": {
    "ExternalId": {
      "Issuer": {},
      "Id": {}
    },
    "UniqueAttribute": {
      "AttributePath": {},
      "AttributeValue": {}
    }
  }
}
```

<h3 id="getgroupid-parameters">Parameters</h3>

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
|body|body|[GetGroupIdRequest](#schemagetgroupidrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» AlternateIdentifier|body|object|true|none|
|» » ExternalId|body|object|false|none|
|» » » Issuer|body|object|true|none|
|» » » Id|body|object|true|none|
|» » UniqueAttribute|body|object|false|none|
|» » » AttributePath|body|object|true|none|
|» » » AttributeValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.GetGroupId|

> Example responses

> 200 Response

```json
{
  "GroupId": {},
  "IdentityStoreId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getgroupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupIdResponse](#schemagetgroupidresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGroupMembershipId

<a id="opIdGetGroupMembershipId"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.GetGroupMembershipId' \
  -d '{
    "IdentityStoreId": {},
    "GroupId": {},
    "MemberId": {
      "UserId": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId`

Retrieves the <code>MembershipId</code> in an identity store.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "GroupId": {},
  "MemberId": {
    "UserId": {}
  }
}
```

<h3 id="getgroupmembershipid-parameters">Parameters</h3>

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
|body|body|[GetGroupMembershipIdRequest](#schemagetgroupmembershipidrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» GroupId|body|object|true|none|
|» MemberId|body|object|true|none|
|» » UserId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.GetGroupMembershipId|

> Example responses

> 200 Response

```json
{
  "MembershipId": {},
  "IdentityStoreId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getgroupmembershipid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGroupMembershipIdResponse](#schemagetgroupmembershipidresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUserId

<a id="opIdGetUserId"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.GetUserId' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.GetUserId' \
  -d '{
    "IdentityStoreId": {},
    "AlternateIdentifier": {
      "ExternalId": {
        "Issuer": {},
        "Id": {}
      },
      "UniqueAttribute": {
        "AttributePath": {},
        "AttributeValue": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.GetUserId`

Retrieves the <code>UserId</code> in an identity store.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "AlternateIdentifier": {
    "ExternalId": {
      "Issuer": {},
      "Id": {}
    },
    "UniqueAttribute": {
      "AttributePath": {},
      "AttributeValue": {}
    }
  }
}
```

<h3 id="getuserid-parameters">Parameters</h3>

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
|body|body|[GetUserIdRequest](#schemagetuseridrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» AlternateIdentifier|body|object|true|none|
|» » ExternalId|body|object|false|none|
|» » » Issuer|body|object|true|none|
|» » » Id|body|object|true|none|
|» » UniqueAttribute|body|object|false|none|
|» » » AttributePath|body|object|true|none|
|» » » AttributeValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.GetUserId|

> Example responses

> 200 Response

```json
{
  "UserId": {},
  "IdentityStoreId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getuserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUserIdResponse](#schemagetuseridresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## IsMemberInGroups

<a id="opIdIsMemberInGroups"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.IsMemberInGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.IsMemberInGroups' \
  -d '{
    "IdentityStoreId": {},
    "MemberId": {
      "UserId": {}
    },
    "GroupIds": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.IsMemberInGroups`

Checks the user's membership in all requested groups and returns if the member exists in all queried groups.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "MemberId": {
    "UserId": {}
  },
  "GroupIds": {}
}
```

<h3 id="ismemberingroups-parameters">Parameters</h3>

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
|body|body|[IsMemberInGroupsRequest](#schemaismemberingroupsrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» MemberId|body|object|true|none|
|» » UserId|body|object|false|none|
|» GroupIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.IsMemberInGroups|

> Example responses

> 200 Response

```json
{
  "Results": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="ismemberingroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IsMemberInGroupsResponse](#schemaismemberingroupsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroupMemberships

<a id="opIdListGroupMemberships"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.ListGroupMemberships' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.ListGroupMemberships' \
  -d '{
    "IdentityStoreId": {},
    "GroupId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.ListGroupMemberships`

For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "GroupId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listgroupmemberships-parameters">Parameters</h3>

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
|body|body|[ListGroupMembershipsRequest](#schemalistgroupmembershipsrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» GroupId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.ListGroupMemberships|

> Example responses

> 200 Response

```json
{
  "GroupMemberships": {},
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

<h3 id="listgroupmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupMembershipsResponse](#schemalistgroupmembershipsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroupMembershipsForMember

<a id="opIdListGroupMembershipsForMember"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.ListGroupMembershipsForMember' \
  -d '{
    "IdentityStoreId": {},
    "MemberId": {
      "UserId": {}
    },
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember`

For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "MemberId": {
    "UserId": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listgroupmembershipsformember-parameters">Parameters</h3>

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
|body|body|[ListGroupMembershipsForMemberRequest](#schemalistgroupmembershipsformemberrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» MemberId|body|object|true|none|
|» » UserId|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.ListGroupMembershipsForMember|

> Example responses

> 200 Response

```json
{
  "GroupMemberships": {},
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

<h3 id="listgroupmembershipsformember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupMembershipsForMemberResponse](#schemalistgroupmembershipsformemberresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroups

<a id="opIdListGroups"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.ListGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.ListGroups' \
  -d '{
    "IdentityStoreId": {},
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.ListGroups`

Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listgroups-parameters">Parameters</h3>

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
|body|body|[ListGroupsRequest](#schemalistgroupsrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.ListGroups|

> Example responses

> 200 Response

```json
{
  "Groups": {},
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

<h3 id="listgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupsResponse](#schemalistgroupsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsers

<a id="opIdListUsers"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.ListUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.ListUsers' \
  -d '{
    "IdentityStoreId": {},
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.ListUsers`

Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listusers-parameters">Parameters</h3>

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
|body|body|[ListUsersRequest](#schemalistusersrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.ListUsers|

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

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGroup

<a id="opIdUpdateGroup"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.UpdateGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.UpdateGroup' \
  -d '{
    "IdentityStoreId": {},
    "GroupId": {},
    "Operations": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.UpdateGroup`

For the specified group in the specified identity store, updates the group metadata and attributes.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "GroupId": {},
  "Operations": {}
}
```

<h3 id="updategroup-parameters">Parameters</h3>

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
|body|body|[UpdateGroupRequest](#schemaupdategrouprequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» GroupId|body|object|true|none|
|» Operations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.UpdateGroup|

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

<h3 id="updategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGroupResponse](#schemaupdategroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUser

<a id="opIdUpdateUser"></a>

> Code samples

```bash
curl 'https://identitystore.us-east-1.amazonaws.com/#X-Amz-Target=AWSIdentityStore.UpdateUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSIdentityStore.UpdateUser' \
  -d '{
    "IdentityStoreId": {},
    "UserId": {},
    "Operations": {}
  }'
```

`POST /#X-Amz-Target=AWSIdentityStore.UpdateUser`

For the specified user in the specified identity store, updates the user metadata and attributes.

> Body parameter

```json
{
  "IdentityStoreId": {},
  "UserId": {},
  "Operations": {}
}
```

<h3 id="updateuser-parameters">Parameters</h3>

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
|body|body|[UpdateUserRequest](#schemaupdateuserrequest)|true|none|
|» IdentityStoreId|body|object|true|none|
|» UserId|body|object|true|none|
|» Operations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSIdentityStore.UpdateUser|

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

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserResponse](#schemaupdateuserresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateGroupResponse">CreateGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupresponse"></a>
<a id="schema_CreateGroupResponse"></a>
<a id="tocScreategroupresponse"></a>
<a id="tocscreategroupresponse"></a>

```json
{
  "GroupId": {},
  "IdentityStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_CreateGroupRequest">CreateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrouprequest"></a>
<a id="schema_CreateGroupRequest"></a>
<a id="tocScreategrouprequest"></a>
<a id="tocscreategrouprequest"></a>

```json
{
  "IdentityStoreId": {},
  "DisplayName": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|DisplayName|object|false|none|none|
|Description|object|false|none|none|

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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_CreateGroupMembershipResponse">CreateGroupMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupmembershipresponse"></a>
<a id="schema_CreateGroupMembershipResponse"></a>
<a id="tocScreategroupmembershipresponse"></a>
<a id="tocscreategroupmembershipresponse"></a>

```json
{
  "MembershipId": {},
  "IdentityStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MembershipId|object|true|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_CreateGroupMembershipRequest">CreateGroupMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategroupmembershiprequest"></a>
<a id="schema_CreateGroupMembershipRequest"></a>
<a id="tocScreategroupmembershiprequest"></a>
<a id="tocscreategroupmembershiprequest"></a>

```json
{
  "IdentityStoreId": {},
  "GroupId": {},
  "MemberId": {
    "UserId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|GroupId|object|true|none|none|
|MemberId|object|true|none|none|

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "UserId": {},
  "IdentityStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "IdentityStoreId": {},
  "UserName": {},
  "Name": {
    "Formatted": {},
    "FamilyName": {},
    "GivenName": {},
    "MiddleName": {},
    "HonorificPrefix": {},
    "HonorificSuffix": {}
  },
  "DisplayName": {},
  "NickName": {},
  "ProfileUrl": {},
  "Emails": {},
  "Addresses": {},
  "PhoneNumbers": {},
  "UserType": {},
  "Title": {},
  "PreferredLanguage": {},
  "Locale": {},
  "Timezone": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|UserName|object|false|none|none|
|Name|object|false|none|none|
|DisplayName|object|false|none|none|
|NickName|object|false|none|none|
|ProfileUrl|object|false|none|none|
|Emails|object|false|none|none|
|Addresses|object|false|none|none|
|PhoneNumbers|object|false|none|none|
|UserType|object|false|none|none|
|Title|object|false|none|none|
|PreferredLanguage|object|false|none|none|
|Locale|object|false|none|none|
|Timezone|object|false|none|none|

<h2 id="tocS_DeleteGroupResponse">DeleteGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupresponse"></a>
<a id="schema_DeleteGroupResponse"></a>
<a id="tocSdeletegroupresponse"></a>
<a id="tocsdeletegroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteGroupRequest">DeleteGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegrouprequest"></a>
<a id="schema_DeleteGroupRequest"></a>
<a id="tocSdeletegrouprequest"></a>
<a id="tocsdeletegrouprequest"></a>

```json
{
  "IdentityStoreId": {},
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|GroupId|object|true|none|none|

<h2 id="tocS_DeleteGroupMembershipResponse">DeleteGroupMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupmembershipresponse"></a>
<a id="schema_DeleteGroupMembershipResponse"></a>
<a id="tocSdeletegroupmembershipresponse"></a>
<a id="tocsdeletegroupmembershipresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteGroupMembershipRequest">DeleteGroupMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegroupmembershiprequest"></a>
<a id="schema_DeleteGroupMembershipRequest"></a>
<a id="tocSdeletegroupmembershiprequest"></a>
<a id="tocsdeletegroupmembershiprequest"></a>

```json
{
  "IdentityStoreId": {},
  "MembershipId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|MembershipId|object|true|none|none|

<h2 id="tocS_DeleteUserResponse">DeleteUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserresponse"></a>
<a id="schema_DeleteUserResponse"></a>
<a id="tocSdeleteuserresponse"></a>
<a id="tocsdeleteuserresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{
  "IdentityStoreId": {},
  "UserId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|UserId|object|true|none|none|

<h2 id="tocS_DescribeGroupResponse">DescribeGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegroupresponse"></a>
<a id="schema_DescribeGroupResponse"></a>
<a id="tocSdescribegroupresponse"></a>
<a id="tocsdescribegroupresponse"></a>

```json
{
  "GroupId": {},
  "DisplayName": {},
  "ExternalIds": {},
  "Description": {},
  "IdentityStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|DisplayName|object|false|none|none|
|ExternalIds|object|false|none|none|
|Description|object|false|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_DescribeGroupRequest">DescribeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegrouprequest"></a>
<a id="schema_DescribeGroupRequest"></a>
<a id="tocSdescribegrouprequest"></a>
<a id="tocsdescribegrouprequest"></a>

```json
{
  "IdentityStoreId": {},
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|GroupId|object|true|none|none|

<h2 id="tocS_DescribeGroupMembershipResponse">DescribeGroupMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegroupmembershipresponse"></a>
<a id="schema_DescribeGroupMembershipResponse"></a>
<a id="tocSdescribegroupmembershipresponse"></a>
<a id="tocsdescribegroupmembershipresponse"></a>

```json
{
  "IdentityStoreId": {},
  "MembershipId": {},
  "GroupId": {},
  "MemberId": {
    "UserId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|MembershipId|object|true|none|none|
|GroupId|object|true|none|none|
|MemberId|[MemberId](#schemamemberid)|true|none|An object containing the identifier of a group member.|

<h2 id="tocS_DescribeGroupMembershipRequest">DescribeGroupMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegroupmembershiprequest"></a>
<a id="schema_DescribeGroupMembershipRequest"></a>
<a id="tocSdescribegroupmembershiprequest"></a>
<a id="tocsdescribegroupmembershiprequest"></a>

```json
{
  "IdentityStoreId": {},
  "MembershipId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|MembershipId|object|true|none|none|

<h2 id="tocS_DescribeUserResponse">DescribeUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserresponse"></a>
<a id="schema_DescribeUserResponse"></a>
<a id="tocSdescribeuserresponse"></a>
<a id="tocsdescribeuserresponse"></a>

```json
{
  "UserName": {},
  "UserId": {},
  "ExternalIds": {},
  "Name": {
    "Formatted": {},
    "FamilyName": {},
    "GivenName": {},
    "MiddleName": {},
    "HonorificPrefix": {},
    "HonorificSuffix": {}
  },
  "DisplayName": {},
  "NickName": {},
  "ProfileUrl": {},
  "Emails": {},
  "Addresses": {},
  "PhoneNumbers": {},
  "UserType": {},
  "Title": {},
  "PreferredLanguage": {},
  "Locale": {},
  "Timezone": {},
  "IdentityStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|false|none|none|
|UserId|object|true|none|none|
|ExternalIds|object|false|none|none|
|Name|object|false|none|none|
|DisplayName|object|false|none|none|
|NickName|object|false|none|none|
|ProfileUrl|object|false|none|none|
|Emails|object|false|none|none|
|Addresses|object|false|none|none|
|PhoneNumbers|object|false|none|none|
|UserType|object|false|none|none|
|Title|object|false|none|none|
|PreferredLanguage|object|false|none|none|
|Locale|object|false|none|none|
|Timezone|object|false|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_DescribeUserRequest">DescribeUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserrequest"></a>
<a id="schema_DescribeUserRequest"></a>
<a id="tocSdescribeuserrequest"></a>
<a id="tocsdescribeuserrequest"></a>

```json
{
  "IdentityStoreId": {},
  "UserId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|UserId|object|true|none|none|

<h2 id="tocS_GetGroupIdResponse">GetGroupIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupidresponse"></a>
<a id="schema_GetGroupIdResponse"></a>
<a id="tocSgetgroupidresponse"></a>
<a id="tocsgetgroupidresponse"></a>

```json
{
  "GroupId": {},
  "IdentityStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_GetGroupIdRequest">GetGroupIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupidrequest"></a>
<a id="schema_GetGroupIdRequest"></a>
<a id="tocSgetgroupidrequest"></a>
<a id="tocsgetgroupidrequest"></a>

```json
{
  "IdentityStoreId": {},
  "AlternateIdentifier": {
    "ExternalId": {
      "Issuer": {},
      "Id": {}
    },
    "UniqueAttribute": {
      "AttributePath": {},
      "AttributeValue": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|AlternateIdentifier|object|true|none|none|

<h2 id="tocS_GetGroupMembershipIdResponse">GetGroupMembershipIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupmembershipidresponse"></a>
<a id="schema_GetGroupMembershipIdResponse"></a>
<a id="tocSgetgroupmembershipidresponse"></a>
<a id="tocsgetgroupmembershipidresponse"></a>

```json
{
  "MembershipId": {},
  "IdentityStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MembershipId|object|true|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_GetGroupMembershipIdRequest">GetGroupMembershipIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgroupmembershipidrequest"></a>
<a id="schema_GetGroupMembershipIdRequest"></a>
<a id="tocSgetgroupmembershipidrequest"></a>
<a id="tocsgetgroupmembershipidrequest"></a>

```json
{
  "IdentityStoreId": {},
  "GroupId": {},
  "MemberId": {
    "UserId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|GroupId|object|true|none|none|
|MemberId|object|true|none|none|

<h2 id="tocS_GetUserIdResponse">GetUserIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuseridresponse"></a>
<a id="schema_GetUserIdResponse"></a>
<a id="tocSgetuseridresponse"></a>
<a id="tocsgetuseridresponse"></a>

```json
{
  "UserId": {},
  "IdentityStoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_GetUserIdRequest">GetUserIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuseridrequest"></a>
<a id="schema_GetUserIdRequest"></a>
<a id="tocSgetuseridrequest"></a>
<a id="tocsgetuseridrequest"></a>

```json
{
  "IdentityStoreId": {},
  "AlternateIdentifier": {
    "ExternalId": {
      "Issuer": {},
      "Id": {}
    },
    "UniqueAttribute": {
      "AttributePath": {},
      "AttributeValue": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|AlternateIdentifier|object|true|none|none|

<h2 id="tocS_IsMemberInGroupsResponse">IsMemberInGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaismemberingroupsresponse"></a>
<a id="schema_IsMemberInGroupsResponse"></a>
<a id="tocSismemberingroupsresponse"></a>
<a id="tocsismemberingroupsresponse"></a>

```json
{
  "Results": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|true|none|none|

<h2 id="tocS_IsMemberInGroupsRequest">IsMemberInGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaismemberingroupsrequest"></a>
<a id="schema_IsMemberInGroupsRequest"></a>
<a id="tocSismemberingroupsrequest"></a>
<a id="tocsismemberingroupsrequest"></a>

```json
{
  "IdentityStoreId": {},
  "MemberId": {
    "UserId": {}
  },
  "GroupIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|MemberId|object|true|none|none|
|GroupIds|object|true|none|none|

<h2 id="tocS_ListGroupMembershipsResponse">ListGroupMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupmembershipsresponse"></a>
<a id="schema_ListGroupMembershipsResponse"></a>
<a id="tocSlistgroupmembershipsresponse"></a>
<a id="tocslistgroupmembershipsresponse"></a>

```json
{
  "GroupMemberships": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupMemberships|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupMembershipsRequest">ListGroupMembershipsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupmembershipsrequest"></a>
<a id="schema_ListGroupMembershipsRequest"></a>
<a id="tocSlistgroupmembershipsrequest"></a>
<a id="tocslistgroupmembershipsrequest"></a>

```json
{
  "IdentityStoreId": {},
  "GroupId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|GroupId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupMembershipsForMemberResponse">ListGroupMembershipsForMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupmembershipsformemberresponse"></a>
<a id="schema_ListGroupMembershipsForMemberResponse"></a>
<a id="tocSlistgroupmembershipsformemberresponse"></a>
<a id="tocslistgroupmembershipsformemberresponse"></a>

```json
{
  "GroupMemberships": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupMemberships|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupMembershipsForMemberRequest">ListGroupMembershipsForMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupmembershipsformemberrequest"></a>
<a id="schema_ListGroupMembershipsForMemberRequest"></a>
<a id="tocSlistgroupmembershipsformemberrequest"></a>
<a id="tocslistgroupmembershipsformemberrequest"></a>

```json
{
  "IdentityStoreId": {},
  "MemberId": {
    "UserId": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|MemberId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupsResponse">ListGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsresponse"></a>
<a id="schema_ListGroupsResponse"></a>
<a id="tocSlistgroupsresponse"></a>
<a id="tocslistgroupsresponse"></a>

```json
{
  "Groups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Groups|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupsRequest">ListGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsrequest"></a>
<a id="schema_ListGroupsRequest"></a>
<a id="tocSlistgroupsrequest"></a>
<a id="tocslistgroupsrequest"></a>

```json
{
  "IdentityStoreId": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

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
|Users|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUsersRequest">ListUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersrequest"></a>
<a id="schema_ListUsersRequest"></a>
<a id="tocSlistusersrequest"></a>
<a id="tocslistusersrequest"></a>

```json
{
  "IdentityStoreId": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_UpdateGroupResponse">UpdateGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategroupresponse"></a>
<a id="schema_UpdateGroupResponse"></a>
<a id="tocSupdategroupresponse"></a>
<a id="tocsupdategroupresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateGroupRequest">UpdateGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategrouprequest"></a>
<a id="schema_UpdateGroupRequest"></a>
<a id="tocSupdategrouprequest"></a>
<a id="tocsupdategrouprequest"></a>

```json
{
  "IdentityStoreId": {},
  "GroupId": {},
  "Operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|GroupId|object|true|none|none|
|Operations|object|true|none|none|

<h2 id="tocS_UpdateUserResponse">UpdateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserresponse"></a>
<a id="schema_UpdateUserResponse"></a>
<a id="tocSupdateuserresponse"></a>
<a id="tocsupdateuserresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateUserRequest">UpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequest"></a>
<a id="schema_UpdateUserRequest"></a>
<a id="tocSupdateuserrequest"></a>
<a id="tocsupdateuserrequest"></a>

```json
{
  "IdentityStoreId": {},
  "UserId": {},
  "Operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|UserId|object|true|none|none|
|Operations|object|true|none|none|

<h2 id="tocS_SensitiveStringType">SensitiveStringType</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestringtype"></a>
<a id="schema_SensitiveStringType"></a>
<a id="tocSsensitivestringtype"></a>
<a id="tocssensitivestringtype"></a>

```json
"password"
```

<h2 id="tocS_SensitiveBooleanType">SensitiveBooleanType</h2>
<!-- backwards compatibility -->
<a id="schemasensitivebooleantype"></a>
<a id="schema_SensitiveBooleanType"></a>
<a id="tocSsensitivebooleantype"></a>
<a id="tocssensitivebooleantype"></a>

```json
true
```

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "StreetAddress": {},
  "Locality": {},
  "Region": {},
  "PostalCode": {},
  "Country": {},
  "Formatted": {},
  "Type": {},
  "Primary": {}
}
```

The address associated with the specified user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreetAddress|object|false|none|none|
|Locality|object|false|none|none|
|Region|object|false|none|none|
|PostalCode|object|false|none|none|
|Country|object|false|none|none|
|Formatted|object|false|none|none|
|Type|object|false|none|none|
|Primary|object|false|none|none|

<h2 id="tocS_Addresses">Addresses</h2>
<!-- backwards compatibility -->
<a id="schemaaddresses"></a>
<a id="schema_Addresses"></a>
<a id="tocSaddresses"></a>
<a id="tocsaddresses"></a>

```json
[
  {
    "StreetAddress": {},
    "Locality": {},
    "Region": {},
    "PostalCode": {},
    "Country": {},
    "Formatted": {},
    "Type": {},
    "Primary": {}
  }
]
```

<h2 id="tocS_ExternalId">ExternalId</h2>
<!-- backwards compatibility -->
<a id="schemaexternalid"></a>
<a id="schema_ExternalId"></a>
<a id="tocSexternalid"></a>
<a id="tocsexternalid"></a>

```json
{
  "Issuer": {},
  "Id": {}
}
```

The identifier issued to this resource by an external identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Issuer|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_UniqueAttribute">UniqueAttribute</h2>
<!-- backwards compatibility -->
<a id="schemauniqueattribute"></a>
<a id="schema_UniqueAttribute"></a>
<a id="tocSuniqueattribute"></a>
<a id="tocsuniqueattribute"></a>

```json
{
  "AttributePath": {},
  "AttributeValue": {}
}
```

An entity attribute that's unique to a specific entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributePath|object|true|none|none|
|AttributeValue|object|true|none|none|

<h2 id="tocS_AlternateIdentifier">AlternateIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaalternateidentifier"></a>
<a id="schema_AlternateIdentifier"></a>
<a id="tocSalternateidentifier"></a>
<a id="tocsalternateidentifier"></a>

```json
{
  "ExternalId": {
    "Issuer": {},
    "Id": {}
  },
  "UniqueAttribute": {
    "AttributePath": {},
    "AttributeValue": {}
  }
}
```

A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExternalId|object|false|none|none|
|UniqueAttribute|object|false|none|none|

<h2 id="tocS_AttributePath">AttributePath</h2>
<!-- backwards compatibility -->
<a id="schemaattributepath"></a>
<a id="schema_AttributePath"></a>
<a id="tocSattributepath"></a>
<a id="tocsattributepath"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
{}
```

The value of the attribute. This is a <code>Document</code> type. This type is not supported by Java V1, Go V1, and older versions of the AWS CLI.

<h2 id="tocS_AttributeOperation">AttributeOperation</h2>
<!-- backwards compatibility -->
<a id="schemaattributeoperation"></a>
<a id="schema_AttributeOperation"></a>
<a id="tocSattributeoperation"></a>
<a id="tocsattributeoperation"></a>

```json
{
  "AttributePath": {},
  "AttributeValue": {}
}
```

An operation that applies to the requested group. This operation might add, replace, or remove an attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributePath|object|true|none|none|
|AttributeValue|object|false|none|none|

<h2 id="tocS_AttributeOperations">AttributeOperations</h2>
<!-- backwards compatibility -->
<a id="schemaattributeoperations"></a>
<a id="schema_AttributeOperations"></a>
<a id="tocSattributeoperations"></a>
<a id="tocsattributeoperations"></a>

```json
[
  {
    "AttributePath": {},
    "AttributeValue": {}
  }
]
```

<h2 id="tocS_IdentityStoreId">IdentityStoreId</h2>
<!-- backwards compatibility -->
<a id="schemaidentitystoreid"></a>
<a id="schema_IdentityStoreId"></a>
<a id="tocSidentitystoreid"></a>
<a id="tocsidentitystoreid"></a>

```json
"string"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_MemberId">MemberId</h2>
<!-- backwards compatibility -->
<a id="schemamemberid"></a>
<a id="schema_MemberId"></a>
<a id="tocSmemberid"></a>
<a id="tocsmemberid"></a>

```json
{
  "UserId": {}
}
```

An object containing the identifier of a group member.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|

<h2 id="tocS_GroupDisplayName">GroupDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemagroupdisplayname"></a>
<a id="schema_GroupDisplayName"></a>
<a id="tocSgroupdisplayname"></a>
<a id="tocsgroupdisplayname"></a>

```json
"password"
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

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "Formatted": {},
  "FamilyName": {},
  "GivenName": {},
  "MiddleName": {},
  "HonorificPrefix": {},
  "HonorificSuffix": {}
}
```

The full name of the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Formatted|object|false|none|none|
|FamilyName|object|false|none|none|
|GivenName|object|false|none|none|
|MiddleName|object|false|none|none|
|HonorificPrefix|object|false|none|none|
|HonorificSuffix|object|false|none|none|

<h2 id="tocS_Emails">Emails</h2>
<!-- backwards compatibility -->
<a id="schemaemails"></a>
<a id="schema_Emails"></a>
<a id="tocSemails"></a>
<a id="tocsemails"></a>

```json
[
  {
    "Value": {},
    "Type": {},
    "Primary": {}
  }
]
```

<h2 id="tocS_PhoneNumbers">PhoneNumbers</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbers"></a>
<a id="schema_PhoneNumbers"></a>
<a id="tocSphonenumbers"></a>
<a id="tocsphonenumbers"></a>

```json
[
  {
    "Value": {},
    "Type": {},
    "Primary": {}
  }
]
```

<h2 id="tocS_ExternalIds">ExternalIds</h2>
<!-- backwards compatibility -->
<a id="schemaexternalids"></a>
<a id="schema_ExternalIds"></a>
<a id="tocSexternalids"></a>
<a id="tocsexternalids"></a>

```json
[
  {
    "Issuer": {},
    "Id": {}
  }
]
```

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "Value": {},
  "Type": {},
  "Primary": {}
}
```

The email address associated with the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Type|object|false|none|none|
|Primary|object|false|none|none|

<h2 id="tocS_ExternalIdIssuer">ExternalIdIssuer</h2>
<!-- backwards compatibility -->
<a id="schemaexternalidissuer"></a>
<a id="schema_ExternalIdIssuer"></a>
<a id="tocSexternalidissuer"></a>
<a id="tocsexternalidissuer"></a>

```json
"password"
```

<h2 id="tocS_ExternalIdIdentifier">ExternalIdIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaexternalididentifier"></a>
<a id="schema_ExternalIdIdentifier"></a>
<a id="tocSexternalididentifier"></a>
<a id="tocsexternalididentifier"></a>

```json
"password"
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "AttributePath": {},
  "AttributeValue": {}
}
```

A query filter used by <code>ListUsers</code> and <code>ListGroups</code>. This filter object provides the attribute name and attribute value to search users or groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributePath|object|true|none|none|
|AttributeValue|object|true|none|none|

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "AttributePath": {},
    "AttributeValue": {}
  }
]
```

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "GroupId": {},
  "DisplayName": {},
  "ExternalIds": {},
  "Description": {},
  "IdentityStoreId": {}
}
```

A group object that contains the metadata and attributes for a specified group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|DisplayName|object|false|none|none|
|ExternalIds|object|false|none|none|
|Description|object|false|none|none|
|IdentityStoreId|object|true|none|none|

<h2 id="tocS_GroupIds">GroupIds</h2>
<!-- backwards compatibility -->
<a id="schemagroupids"></a>
<a id="schema_GroupIds"></a>
<a id="tocSgroupids"></a>
<a id="tocsgroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GroupMembership">GroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembership"></a>
<a id="schema_GroupMembership"></a>
<a id="tocSgroupmembership"></a>
<a id="tocsgroupmembership"></a>

```json
{
  "IdentityStoreId": {},
  "MembershipId": {},
  "GroupId": {},
  "MemberId": {
    "UserId": {}
  }
}
```

Contains the identifiers for a group, a group member, and a <code>GroupMembership</code> object in the identity store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityStoreId|object|true|none|none|
|MembershipId|object|false|none|none|
|GroupId|object|false|none|none|
|MemberId|object|false|none|none|

<h2 id="tocS_GroupMembershipExistenceResult">GroupMembershipExistenceResult</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembershipexistenceresult"></a>
<a id="schema_GroupMembershipExistenceResult"></a>
<a id="tocSgroupmembershipexistenceresult"></a>
<a id="tocsgroupmembershipexistenceresult"></a>

```json
{
  "GroupId": {},
  "MemberId": {
    "UserId": {}
  },
  "MembershipExists": {}
}
```

Indicates whether a resource is a member of a group in the identity store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|false|none|none|
|MemberId|object|false|none|none|
|MembershipExists|object|false|none|none|

<h2 id="tocS_GroupMembershipExistenceResults">GroupMembershipExistenceResults</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembershipexistenceresults"></a>
<a id="schema_GroupMembershipExistenceResults"></a>
<a id="tocSgroupmembershipexistenceresults"></a>
<a id="tocsgroupmembershipexistenceresults"></a>

```json
[
  {
    "GroupId": {},
    "MemberId": {
      "UserId": {}
    },
    "MembershipExists": {}
  }
]
```

<h2 id="tocS_GroupMemberships">GroupMemberships</h2>
<!-- backwards compatibility -->
<a id="schemagroupmemberships"></a>
<a id="schema_GroupMemberships"></a>
<a id="tocSgroupmemberships"></a>
<a id="tocsgroupmemberships"></a>

```json
[
  {
    "IdentityStoreId": {},
    "MembershipId": {},
    "GroupId": {},
    "MemberId": {
      "UserId": {}
    }
  }
]
```

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
[
  {
    "GroupId": {},
    "DisplayName": {},
    "ExternalIds": {},
    "Description": {},
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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
[
  {
    "UserName": {},
    "UserId": {},
    "ExternalIds": {},
    "Name": {
      "Formatted": {},
      "FamilyName": {},
      "GivenName": {},
      "MiddleName": {},
      "HonorificPrefix": {},
      "HonorificSuffix": {}
    },
    "DisplayName": {},
    "NickName": {},
    "ProfileUrl": {},
    "Emails": {},
    "Addresses": {},
    "PhoneNumbers": {},
    "UserType": {},
    "Title": {},
    "PreferredLanguage": {},
    "Locale": {},
    "Timezone": {},
    "IdentityStoreId": {}
  }
]
```

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "Value": {},
  "Type": {},
  "Primary": {}
}
```

The phone number associated with the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Type|object|false|none|none|
|Primary|object|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "UserName": {},
  "UserId": {},
  "ExternalIds": {},
  "Name": {
    "Formatted": {},
    "FamilyName": {},
    "GivenName": {},
    "MiddleName": {},
    "HonorificPrefix": {},
    "HonorificSuffix": {}
  },
  "DisplayName": {},
  "NickName": {},
  "ProfileUrl": {},
  "Emails": {},
  "Addresses": {},
  "PhoneNumbers": {},
  "UserType": {},
  "Title": {},
  "PreferredLanguage": {},
  "Locale": {},
  "Timezone": {},
  "IdentityStoreId": {}
}
```

A user object that contains the metadata and attributes for a specified user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|false|none|none|
|UserId|object|true|none|none|
|ExternalIds|object|false|none|none|
|Name|object|false|none|none|
|DisplayName|object|false|none|none|
|NickName|object|false|none|none|
|ProfileUrl|object|false|none|none|
|Emails|object|false|none|none|
|Addresses|object|false|none|none|
|PhoneNumbers|object|false|none|none|
|UserType|object|false|none|none|
|Title|object|false|none|none|
|PreferredLanguage|object|false|none|none|
|Locale|object|false|none|none|
|Timezone|object|false|none|none|
|IdentityStoreId|object|true|none|none|
